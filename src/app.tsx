import {
  Anchor,
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import "./globals.css";

const HOMEPAGE = "https://github.com/Trapar-waves/react-mantine-tailwind";
const LOGOS_SET_URL = "https://icon-sets.iconify.design/logos/";

/** 与 README 技术栈及依赖一致；图标来自 Iconify `logos` 集合（Gil Barbara / CC0）。 */
const techStack: Array<{
  id: string;
  label: string;
  hint: string;
  iconClass: string;
}> = [
  {
    id: "react-mantine",
    label: "React 19 · Mantine 9",
    hint: "@mantine/core · @mantine/hooks，组件驱动界面",
    iconClass: "icon-[logos--react]",
  },
  {
    id: "ts",
    label: "TypeScript",
    hint: "类型安全与可维护性",
    iconClass: "icon-[logos--typescript-icon]",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS 4",
    hint: "@tailwindcss/postcss",
    iconClass: "icon-[logos--tailwindcss-icon]",
  },
  {
    id: "rsbuild",
    label: "Rsbuild",
    hint: "@rsbuild/core · @rsbuild/plugin-react",
    iconClass: "icon-[logos--webpack]",
  },
  {
    id: "postcss",
    label: "PostCSS",
    hint: "import · preset-mantine · simple-vars · autoprefixer",
    iconClass: "icon-[logos--postcss]",
  },
  {
    id: "eslint",
    label: "ESLint",
    hint: "@antfu/eslint-config",
    iconClass: "icon-[logos--eslint]",
  },
  {
    id: "pnpm",
    label: "pnpm",
    hint: "包管理与 CI 缓存",
    iconClass: "icon-[logos--pnpm]",
  },
  {
    id: "node",
    label: "Node.js",
    hint: "本地开发 ≥18 推荐",
    iconClass: "icon-[logos--nodejs-icon]",
  },
  {
    id: "github",
    label: "GitHub Actions",
    hint: "Release 与 Pages 流水线",
    iconClass: "icon-[logos--github-icon]",
  },
];

const readmeFeatures: string[] = [
  "基于 React 19 的现代组件模型。",
  "Mantine 丰富组件与 Hooks，快速搭建后台与工具界面。",
  "Tailwind 原子类 + @tailwindcss/postcss，与 Mantine 样式共存。",
  "PostCSS：postcss-import、autoprefixer、postcss-simple-vars 等与 postcss-preset-mantine 协同。",
  "TypeScript 贯穿开发与构建。",
  "Rsbuild 提供极速开发与优化产物。",
  "@iconify/json + @iconify/tailwind（含 logos 等集合）统一矢量图标。",
  "tailwind-preset-mantine 与 postcss-preset-mantine 对齐设计变量。",
  "@antfu/eslint-config 保障代码风格与质量。",
  "Husky + lint-staged 提交前自动检查。",
  "GitHub Actions 发版与变更日志。",
];

const readmeTechNote = "README 中还列举了可搭配的 Zustand、TanStack Router / Query / Table 等方向；当前模板仓库以 Mantine + Tailwind + Rsbuild 为核心依赖，可按业务增量接入。";

function App() {
  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(180deg, #f4f6fb 0%, #eef2f9 100%)" }}>
      <a
        href="#main"
        style={{
          position: "absolute",
          left: 12,
          top: 12,
          padding: "8px 14px",
          background: "#1c2b45",
          color: "#fff",
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 14,
          textDecoration: "none",
          transform: "translateY(-200%)",
          transition: "transform 180ms ease-out",
          zIndex: 50,
        }}
        className="skip-focus"
      >
        跳到主要内容
      </a>
      <style>
        {`
          .skip-focus:focus { transform: translateY(0); outline: 3px solid #4c6ef5; outline-offset: 2px; }
          @media (prefers-reduced-motion: reduce) {
            * { animation: none !important; transition-duration: 0.01ms !important; }
          }
          .tech-icon-wrap {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 0.75rem;
            background: rgba(255,255,255,0.9);
            border: 1px solid rgba(76, 110, 245, 0.2);
            flex-shrink: 0;
          }
          .tech-icon-wrap span[class^="icon-"] {
            font-size: 1.5rem;
            line-height: 1;
          }
        `}
      </style>

      <Container component="header" pt="xl" pb="md" size="lg">
        <Group gap="sm" wrap="wrap">
          <Badge variant="light" color="indigo" size="lg" radius="sm">
            Trapar-waves
          </Badge>
          <Badge variant="outline" color="gray" size="lg" radius="sm">
            react-mantine-tailwind
          </Badge>
        </Group>
        <Title order={1} mt="md" c="dark.8" fw={800} style={{ letterSpacing: "-0.03em", maxWidth: 720 }}>
          Mantine 与 Tailwind 共存的模板展示
        </Title>
        <Text mt="sm" c="dimmed" size="lg" maw={720} lh={1.65}>
          本页结合仓库 README 中的特性说明，概括开箱能力、样式链路与工程化工具；下方技术图标均使用 Iconify
          {" "}
          <Anchor href={LOGOS_SET_URL} target="_blank" rel="noreferrer" size="lg" fw={600}>
            logos
          </Anchor>
          {" "}
          集合（SVG Logos / CC0），便于在静态站点上展示品牌级矢量标识。
        </Text>
        <Group mt="xl" gap="md" wrap="wrap">
          <Button
            component="a"
            href={HOMEPAGE}
            size="md"
            radius="md"
            styles={{ root: { minHeight: 44 } }}
          >
            查看模板仓库
          </Button>
          <Button
            component="a"
            href="https://mantine.dev/"
            target="_blank"
            rel="noreferrer"
            variant="light"
            color="indigo"
            size="md"
            radius="md"
            styles={{ root: { minHeight: 44 } }}
          >
            Mantine 文档
          </Button>
        </Group>
      </Container>

      <main id="main">
        <Container size="lg" pb="xl">
          <Title order={2} size="h3" mb="sm" c="dark.7">
            技术栈一览
          </Title>
          <Text size="sm" c="dimmed" mb="lg" maw={800}>
            Rsbuild 基于 Rspack 与 webpack 生态，使用
            {" "}
            <Text
              component="span"
              fw={600}
              c="dark.6"
            >
              logos--webpack
            </Text>
            {" "}
            作示意；其余图标与 README、package.json 中依赖一致。
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            {techStack.map(item => (
              <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
                <Group align="flex-start" wrap="nowrap" gap="md">
                  <div className="tech-icon-wrap" aria-hidden>
                    <span className={item.iconClass} />
                  </div>
                  <div>
                    <Text fw={700} size="sm" c="dark.8">
                      {item.label}
                    </Text>
                    <Text size="xs" c="dimmed" mt={6} lh={1.5}>
                      {item.hint}
                    </Text>
                  </div>
                </Group>
              </Card>
            ))}
          </SimpleGrid>

          <Divider my="xl" label="README 特性摘要" labelPosition="left" />

          <Paper radius="md" p="lg" withBorder shadow="xs" bg="white">
            <Stack gap="md">
              <Title order={3} size="h4" c="dark.8">
                产品能力（与 README「Features」对齐）
              </Title>
              <List
                spacing="xs"
                size="sm"
                c="dark.6"
                icon={(
                  <ThemeIcon
                    color="indigo"
                    variant="light"
                    radius="xl"
                    size={24}
                    aria-hidden
                  >
                    <span
                      className="icon-[logos--markdown]"
                      style={{ fontSize: 18 }}
                    />
                  </ThemeIcon>
                )}
              >
                {readmeFeatures.map(line => (
                  <List.Item key={line}>{line}</List.Item>
                ))}
              </List>
              <Text size="sm" c="dimmed" fs="italic">
                {readmeTechNote}
              </Text>
            </Stack>
          </Paper>

          <Paper radius="md" p="lg" withBorder shadow="xs" bg="white" mt="xl">
            <Group justify="space-between" align="flex-start" wrap="wrap" gap="lg">
              <Stack gap="xs" maw={520}>
                <Title order={3} size="h4" c="dark.8">
                  图标与可访问性
                </Title>
                <Text size="sm" c="dimmed" lh={1.65}>
                  使用矢量图标替代 emoji 作为结构装饰；列表与卡片保持足够对比度与触控高度（主按钮 ≥44px）。若系统开启「减少动态效果」，过渡时间会被压缩。
                </Text>
                <Text size="xs" c="dimmed">
                  图标集说明见
                  {" "}
                  <Anchor href={LOGOS_SET_URL} target="_blank" rel="noreferrer" size="xs">
                    icon-sets.iconify.design/logos
                  </Anchor>
                  。
                </Text>
              </Stack>
              <Group gap="lg" wrap="wrap" justify="center">
                <div className="tech-icon-wrap" title="React" aria-label="React">
                  <span className="icon-[logos--react]" />
                </div>
                <div className="tech-icon-wrap" title="TypeScript" aria-label="TypeScript">
                  <span className="icon-[logos--typescript-icon]" />
                </div>
                <div className="tech-icon-wrap" title="Tailwind CSS" aria-label="Tailwind CSS">
                  <span className="icon-[logos--tailwindcss-icon]" />
                </div>
                <div className="tech-icon-wrap" title="ESLint" aria-label="ESLint">
                  <span className="icon-[logos--eslint]" />
                </div>
              </Group>
            </Group>
          </Paper>

          <Text size="xs" c="dimmed" mt="xl" ta="center">
            MIT · Trapar-waves · 图标来自 Iconify logos（CC0），与 README 描述一致处已逐项列出。
          </Text>
        </Container>
      </main>
    </div>
  );
}

export default App;
