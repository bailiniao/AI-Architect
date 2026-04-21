---
name: github-ai-shengcheng-skills
description: GitHub repository operations via gh CLI for PRs, issues, checks, releases, and lightweight automation. Use when handling GitHub workflows without opening the web UI.
---

# GitHub Repo Ops

Use this skill to run practical, high-signal GitHub repository operations with `gh`.

## When to use

Use this skill when the user needs to:
- Check PR status, checks, merge readiness
- Create/comment/triage issues and pull requests
- Inspect CI workflow runs and logs
- Query GitHub API for structured data
- Handle release and branch automation tasks in one repo

## When NOT to use

Do not use this skill for:
- Local git-only operations (`git commit`, `git rebase`, conflict resolution)
- Non-GitHub hosts (GitLab/Bitbucket/self-hosted unless `gh` is configured for them)
- Browser-only manual workflows that need clicking through UI

## Prerequisites

```bash
gh --version
gh auth status || gh auth login
```

## Core patterns

Prefer explicit repo targeting for reproducibility:

```bash
REPO=owner/repo
```

### PR workflow

```bash
# List active PRs
gh pr list --repo "$REPO" --state open

# View PR details + checks
gh pr view 123 --repo "$REPO"
gh pr checks 123 --repo "$REPO"

# Create PR (from current branch)
gh pr create --repo "$REPO" --title "feat: ..." --body "..."

# Enable auto-merge (respects branch protection; merges only after checks/reviews pass)
gh pr merge 123 --repo "$REPO" --auto --squash

# Merge PR with squash immediately (only when all requirements already pass)
gh pr merge 123 --repo "$REPO" --squash --delete-branch
```

### Issue workflow

```bash
# List recent open issues
gh issue list --repo "$REPO" --state open --limit 20

# Create issue
gh issue create --repo "$REPO" --title "Bug: ..." --body "Steps to reproduce..."

# Comment and close
gh issue comment 456 --repo "$REPO" --body "Fixed in #123"
gh issue close 456 --repo "$REPO"
```

### CI/workflow workflow

```bash
# Recent runs
gh run list --repo "$REPO" --limit 10

# View failed logs
gh run view <run-id> --repo "$REPO" --log-failed

# Re-run failed jobs
gh run rerun <run-id> --repo "$REPO" --failed
```

### API + JSON extraction

```bash
# PR health snapshot
gh pr list --repo "$REPO" --json number,title,mergeStateStatus,reviewDecision \
  --jq '.[] | "#\(.number) [\(.mergeStateStatus)] \(.reviewDecision // "NO_REVIEW") - \(.title)"'

# Repo summary
gh api repos/$REPO --jq '{stars: .stargazers_count, forks: .forks_count, open_issues: .open_issues_count}'
```

### Releases and tags

```bash
# List releases
gh release list --repo "$REPO"

# Create release from tag
gh release create v1.2.3 --repo "$REPO" --title "v1.2.3" --notes "Release notes..."
```

## Safety rules

- Confirm before destructive/visible actions: merging PRs, closing issues, creating releases, deleting branches.
- Prefer read-only inspection first, then mutate.
- Keep commands scoped with `--repo` and explicit IDs.
- For bulk operations, show a dry-run list first.
- After merge succeeds, always return to `master` and delete the merged branch locally and remotely.

## Handy one-liners

```bash
# PRs waiting on review
gh pr list --repo "$REPO" --search "review:required state:open"

# Failed workflow runs in last 20
gh run list --repo "$REPO" --limit 20 --json databaseId,conclusion,name \
  --jq '.[] | select(.conclusion=="failure") | "\(.databaseId) \(.name)"'

# Issues without assignee
gh issue list --repo "$REPO" --state open --json number,title,assignees \
  --jq '.[] | select((.assignees|length)==0) | "#\(.number) \(.title)"'
```

<!--
【中文翻译（注释版）】

# GitHub Repo Ops

使用这个 skill，可以通过 `gh` 执行实用且高频的 GitHub 仓库操作。

## 何时使用

当用户需要以下能力时使用：
- 检查 PR 状态、检查项与可合并性
- 创建 / 评论 / 分拣 issue 与 pull request
- 查看 CI 工作流运行状态与日志
- 查询 GitHub API 的结构化数据
- 在单个仓库中处理发布与分支自动化任务

## 何时不要使用

以下场景不要使用本 skill：
- 仅本地 git 操作（`git commit`、`git rebase`、冲突处理）
- 非 GitHub 托管平台（GitLab / Bitbucket / 自建，除非已配置 `gh`）
- 必须手工点击网页界面的流程

## 前置条件

```bash
gh --version
gh auth status || gh auth login
```

## 核心模式

为保证可复现，优先显式指定仓库：

```bash
REPO=owner/repo
```

### PR 工作流

```bash
# 列出活跃 PR
gh pr list --repo "$REPO" --state open

# 查看 PR 详情与检查项
gh pr view 123 --repo "$REPO"
gh pr checks 123 --repo "$REPO"

# 从当前分支创建 PR
gh pr create --repo "$REPO" --title "feat: ..." --body "..."

# 开启自动合并（遵守分支保护；仅在 checks/reviews 通过后自动合并）
gh pr merge 123 --repo "$REPO" --auto --squash

# 立即以 squash 方式合并（仅在所有要求已通过时）
gh pr merge 123 --repo "$REPO" --squash --delete-branch
```

### Issue 工作流

```bash
# 列出最近打开的 issue
gh issue list --repo "$REPO" --state open --limit 20

# 创建 issue
gh issue create --repo "$REPO" --title "Bug: ..." --body "Steps to reproduce..."

# 评论并关闭 issue
gh issue comment 456 --repo "$REPO" --body "Fixed in #123"
gh issue close 456 --repo "$REPO"
```

### CI / 工作流

```bash
# 最近运行记录
gh run list --repo "$REPO" --limit 10

# 查看失败日志
gh run view <run-id> --repo "$REPO" --log-failed

# 仅重跑失败任务
gh run rerun <run-id> --repo "$REPO" --failed
```

### API + JSON 提取

```bash
# PR 健康快照
gh pr list --repo "$REPO" --json number,title,mergeStateStatus,reviewDecision \
  --jq '.[] | "#\(.number) [\(.mergeStateStatus)] \(.reviewDecision // "NO_REVIEW") - \(.title)"'

# 仓库摘要
gh api repos/$REPO --jq '{stars: .stargazers_count, forks: .forks_count, open_issues: .open_issues_count}'
```

### Release 与标签

```bash
# 列出 release
gh release list --repo "$REPO"

# 基于 tag 创建 release
gh release create v1.2.3 --repo "$REPO" --title "v1.2.3" --notes "Release notes..."
```

## 安全规则

- 执行可见/破坏性操作前先确认：合并 PR、关闭 issue、创建 release、删除分支。
- 先读后写：先做只读检查，再做变更。
- 命令要显式带 `--repo` 和明确 ID。
- 批量操作先给 dry-run 列表。
- 合并成功后，必须切回 `master`，并删除本地与远端已合并分支。

## 常用一行命令

```bash
# 等待评审的 PR
gh pr list --repo "$REPO" --search "review:required state:open"

# 最近 20 条中失败的 workflow run
gh run list --repo "$REPO" --limit 20 --json databaseId,conclusion,name \
  --jq '.[] | select(.conclusion=="failure") | "\(.databaseId) \(.name)"'

# 无负责人的 issue
gh issue list --repo "$REPO" --state open --json number,title,assignees \
  --jq '.[] | select((.assignees|length)==0) | "#\(.number) \(.title)"'
```
-->

