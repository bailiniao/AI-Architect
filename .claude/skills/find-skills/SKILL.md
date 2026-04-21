---
name: find-skills
description: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.
---

# Find Skills

This skill helps you discover and install skills from the open agent skills ecosystem.

## When to Use This Skill

Use this skill when the user:

- Asks "how do I do X" where X might be a common task with an existing skill
- Says "find a skill for X" or "is there a skill for X"
- Asks "can you do X" where X is a specialized capability
- Expresses interest in extending agent capabilities
- Wants to search for tools, templates, or workflows
- Mentions they wish they had help with a specific domain (design, testing, deployment, etc.)

## What is the Skills CLI?

The Skills CLI (`npx skills`) is the package manager for the open agent skills ecosystem. Skills are modular packages that extend agent capabilities with specialized knowledge, workflows, and tools.

**Key commands:**

- `npx skills find [query]` - Search for skills interactively or by keyword
- `npx skills add <package>` - Install a skill from GitHub or other sources
- `npx skills check` - Check for skill updates
- `npx skills update` - Update all installed skills

**Browse skills at:** https://skills.sh/

## How to Help Users Find Skills

### Step 1: Understand What They Need

When a user asks for help with something, identify:

1. The domain (e.g., React, testing, design, deployment)
2. The specific task (e.g., writing tests, creating animations, reviewing PRs)
3. Whether this is a common enough task that a skill likely exists

### Step 2: Check the Leaderboard First

Before running a CLI search, check the [skills.sh leaderboard](https://skills.sh/) to see if a well-known skill already exists for the domain. The leaderboard ranks skills by total installs, surfacing the most popular and battle-tested options.

For example, top skills for web development include:
- `vercel-labs/agent-skills` — React, Next.js, web design (100K+ installs each)
- `anthropics/skills` — Frontend design, document processing (100K+ installs)

### Step 3: Search for Skills

If the leaderboard doesn't cover the user's need, run the find command:

```bash
npx skills find [query]
```

For example:

- User asks "how do I make my React app faster?" → `npx skills find react performance`
- User asks "can you help me with PR reviews?" → `npx skills find pr review`
- User asks "I need to create a changelog" → `npx skills find changelog`

### Step 4: Verify Quality Before Recommending

**Do not recommend a skill based solely on search results.** Always verify:

1. **Install count** — Prefer skills with 1K+ installs. Be cautious with anything under 100.
2. **Source reputation** — Official sources (`vercel-labs`, `anthropics`, `microsoft`) are more trustworthy than unknown authors.
3. **GitHub stars** — Check the source repository. A skill from a repo with <100 stars should be treated with skepticism.

### Step 5: Present Options to the User

When you find relevant skills, present them to the user with:

1. The skill name and what it does
2. The install count and source
3. The install command they can run
4. A link to learn more at skills.sh

Example response:

```
I found a skill that might help! The "react-best-practices" skill provides
React and Next.js performance optimization guidelines from Vercel Engineering.
(185K installs)

To install it:
npx skills add vercel-labs/agent-skills@react-best-practices

Learn more: https://skills.sh/vercel-labs/agent-skills/react-best-practices
```

### Step 6: Offer to Install

If the user wants to proceed, you can install the skill for them:

```bash
npx skills add <owner/repo@skill> -g -y
```

The `-g` flag installs globally (user-level) and `-y` skips confirmation prompts.

## Common Skill Categories

When searching, consider these common categories:

| Category        | Example Queries                          |
| --------------- | ---------------------------------------- |
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing         | testing, jest, playwright, e2e           |
| DevOps          | deploy, docker, kubernetes, ci-cd        |
| Documentation   | docs, readme, changelog, api-docs        |
| Code Quality    | review, lint, refactor, best-practices   |
| Design          | ui, ux, design-system, accessibility     |
| Productivity    | workflow, automation, git                |

## Tips for Effective Searches

1. **Use specific keywords**: "react testing" is better than just "testing"
2. **Try alternative terms**: If "deploy" doesn't work, try "deployment" or "ci-cd"
3. **Check popular sources**: Many skills come from `vercel-labs/agent-skills` or `ComposioHQ/awesome-claude-skills`

## When No Skills Are Found

If no relevant skills exist:

1. Acknowledge that no existing skill was found
2. Offer to help with the task directly using your general capabilities
3. Suggest the user could create their own skill with `npx skills init`

Example:

```
I searched for skills related to "xyz" but didn't find any matches.
I can still help you with this task directly! Would you like me to proceed?

If this is something you do often, you could create your own skill:
npx skills init my-xyz-skill
```

<!--
【中文翻译（注释版）】

# Find Skills

这个 skill 用于帮助你在开放的 agent skills 生态中发现并安装合适的技能。

## 何时使用本 skill

当用户出现以下诉求时使用：

- 询问“怎么做 X”，且 X 很可能已有现成 skill
- 明确说“帮我找一个 X 的 skill”或“有没有 X 的 skill”
- 询问“你能不能做 X”，且 X 属于专项能力
- 表达想扩展 agent 能力
- 想找工具、模板或工作流
- 提到希望在某个领域（设计、测试、部署等）获得帮助

## Skills CLI 是什么？

Skills CLI（`npx skills`）是开放 skills 生态的包管理工具。Skill 是可模块化安装的能力包，可扩展 agent 的专业知识、流程和工具能力。

**核心命令：**

- `npx skills find [query]`：按关键词或交互方式搜索 skill
- `npx skills add <package>`：从 GitHub 等来源安装 skill
- `npx skills check`：检查 skill 更新
- `npx skills update`：更新全部已安装 skill

**浏览技能站：** https://skills.sh/

## 如何帮助用户找 skill

### 第一步：理解用户需求

当用户提出需求时，识别：

1. 领域（如 React、测试、设计、部署）
2. 具体任务（如写测试、做动画、PR 评审）
3. 是否属于常见任务（很可能已有 skill）

### 第二步：先看排行榜

在跑 CLI 搜索前，先看 [skills.sh leaderboard](https://skills.sh/)，确认该领域是否已有成熟 skill。排行榜按安装量排序，能优先看到更流行、更稳定的方案。

例如，Web 开发常见高热度 skill 包括：
- `vercel-labs/agent-skills`：React、Next.js、Web 设计（单项 100K+ 安装）
- `anthropics/skills`：前端设计、文档处理（100K+ 安装）

### 第三步：搜索 skill

若排行榜没覆盖用户需求，再执行：

```bash
npx skills find [query]
```

示例：

- 用户问“怎么优化 React 性能？” → `npx skills find react performance`
- 用户问“能帮我做 PR review 吗？” → `npx skills find pr review`
- 用户问“我需要生成 changelog” → `npx skills find changelog`

### 第四步：推荐前先做质量核验

**不要仅凭搜索结果直接推荐。** 至少核验：

1. **安装量**：优先 1K+，低于 100 需谨慎
2. **来源信誉**：`vercel-labs`、`anthropics`、`microsoft` 等官方来源更可靠
3. **GitHub 星标**：来源仓库若 <100 stars，建议保守对待

### 第五步：向用户呈现选项

给出候选 skill 时包含：

1. skill 名称与用途
2. 安装量与来源
3. 可执行安装命令
4. 对应 skills.sh 详情链接

示例回复：

```text
我找到一个可能适合你的 skill："react-best-practices"。
它提供来自 Vercel Engineering 的 React / Next.js 性能优化实践。（185K 安装）

安装命令：
npx skills add vercel-labs/agent-skills@react-best-practices

详情：
https://skills.sh/vercel-labs/agent-skills/react-best-practices
```

### 第六步：提供代安装

用户确认后，可代为安装：

```bash
npx skills add <owner/repo@skill> -g -y
```

其中 `-g` 为全局安装（用户级），`-y` 用于跳过确认提示。

## 常见 skill 分类

搜索时可优先考虑以下分类：

| 分类 | 示例查询 |
| --- | --- |
| Web 开发 | react, nextjs, typescript, css, tailwind |
| 测试 | testing, jest, playwright, e2e |
| DevOps | deploy, docker, kubernetes, ci-cd |
| 文档 | docs, readme, changelog, api-docs |
| 代码质量 | review, lint, refactor, best-practices |
| 设计 | ui, ux, design-system, accessibility |
| 效率工具 | workflow, automation, git |

## 提升搜索效果的小技巧

1. **关键词尽量具体**：`react testing` 优于单独 `testing`
2. **尝试同义词**：`deploy` 不理想时可换 `deployment`、`ci-cd`
3. **优先看热门来源**：如 `vercel-labs/agent-skills`、`ComposioHQ/awesome-claude-skills`

## 当没有找到合适 skill 时

若没找到匹配项：

1. 明确告知“当前无可用 skill”
2. 表示仍可直接处理该任务
3. 建议用户若高频使用可自建 skill（`npx skills init`）

示例：

```text
我搜索了与 "xyz" 相关的 skill，但目前没有匹配结果。
不过我仍可以直接帮你完成这个任务，你要我继续吗？

如果这是高频需求，你也可以创建自己的 skill：
npx skills init my-xyz-skill
```
-->
