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

/**
 * 与 README 技术栈及依赖一致；图标来自 Iconify `logos` 集合（Gil Barbara / CC0）。
*/
const techStack: Array<{
  hint: string;
  iconClass: string;
  id: string;
  label: string;
}> = [
  {
    hint: "@mantine/core · @mantine/hooks，组件驱动界面",
    iconClass: "icon-[logos--react]",
    id: "react-mantine",
    label: "React 19 · Mantine 9",
  },
  {
    hint: "类型安全与可维护性",
    iconClass: "icon-[logos--typescript-icon]",
    id: "ts",
    label: "TypeScript",
  },
  {
    hint: "@tailwindcss/postcss",
    iconClass: "icon-[logos--tailwindcss-icon]",
    id: "tailwind",
    label: "Tailwind CSS 4",
  },
  {
    hint: "@rsbuild/core · @rsbuild/plugin-react",
    iconClass: "icon-[material-icon-theme--rstack]",
    id: "rsbuild",
    label: "Rsbuild",
  },
  {
    hint: "import · preset-mantine · simple-vars · autoprefixer",
    iconClass: "icon-[logos--postcss]",
    id: "postcss",
    label: "PostCSS",
  },
  {
    hint: "@renton/eslint-config-react",
    iconClass: "icon-[logos--eslint]",
    id: "eslint",
    label: "ESLint",
  },
  {
    hint: "包管理与 CI 缓存",
    iconClass: "icon-[logos--pnpm]",
    id: "pnpm",
    label: "pnpm",
  },
  {
    hint: "本地开发 ≥18 推荐",
    iconClass: "icon-[logos--nodejs-icon]",
    id: "node",
    label: "Node.js",
  },
  {
    hint: "Release 与 Pages 流水线",
    iconClass: "icon-[logos--github-icon]",
    id: "github",
    label: "GitHub Actions",
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
  "@renton/eslint-config-react 保障代码风格与质量。",
  "Husky + lint-staged 提交前自动检查。",
  "GitHub Actions 发版与变更日志。",
];

const readmeTechNote = "README 中还列举了可搭配的 Zustand、TanStack Router / Query / Table 等方向；当前模板仓库以 Mantine + Tailwind + Rsbuild 为核心依赖，可按业务增量接入。";

export default function App() {
  return (
    <div style={{ background: "linear-gradient(180deg, #f4f6fb 0%, #eef2f9 100%)", minHeight: "100dvh" }}>
      <a
        className="skip-focus"
        href="#main"
        style={{
          background: "#1c2b45",
          borderRadius: 8,
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          left: 12,
          padding: "8px 14px",
          position: "absolute",
          textDecoration: "none",
          top: 12,
          transform: "translateY(-200%)",
          transition: "transform 180ms ease-out",
          zIndex: 50,
        }}
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

      <Container component="header" pb="md" pt="xl" size="lg">
        <Group gap="sm" wrap="wrap">
          <Badge color="indigo" radius="sm" size="lg" variant="light">
            Trapar-waves
          </Badge>
          <Badge color="gray" radius="sm" size="lg" variant="outline">
            react-mantine-tailwind
          </Badge>
        </Group>
        <Title c="dark.8" fw={800} mt="md" order={1} style={{ letterSpacing: "-0.03em", maxWidth: 720 }}>
          Mantine 与 Tailwind 共存的模板展示
        </Title>
        <Text c="dimmed" lh={1.65} maw={720} mt="sm" size="lg">
          本页结合仓库 README 中的特性说明，概括开箱能力、样式链路与工程化工具；下方技术图标均使用 Iconify
          {" "}
          <Anchor fw={600} href={LOGOS_SET_URL} rel="noreferrer" size="lg" target="_blank">
            logos
          </Anchor>
          {" "}
          集合（SVG Logos / CC0），便于在静态站点上展示品牌级矢量标识。
        </Text>
        <Group gap="md" mt="xl" wrap="wrap">
          <Button
            component="a"
            href={HOMEPAGE}
            radius="md"
            size="md"
            styles={{ root: { minHeight: 44 } }}
          >
            查看模板仓库
          </Button>
          <Button
            color="indigo"
            component="a"
            href="https://mantine.dev/"
            radius="md"
            rel="noreferrer"
            size="md"
            styles={{ root: { minHeight: 44 } }}
            target="_blank"
            variant="light"
          >
            Mantine 文档
          </Button>
        </Group>
      </Container>

      <main id="main">
        <Container pb="xl" size="lg">
          <Title c="dark.7" mb="sm" order={2} size="h3">
            技术栈一览
          </Title>
          <Text c="dimmed" maw={800} mb="lg" size="sm">
            Rsbuild 基于 Rspack 与 webpack 生态，使用
            {" "}
            <Text
              c="dark.6"
              component="span"
              fw={600}
            >
              material-icon-theme--rstack
            </Text>
            {" "}
            作示意；其余图标与 README、package.json 中依赖一致。
          </Text>

          <SimpleGrid cols={{ base: 1, md: 3, sm: 2 }} spacing="md">
            {techStack.map(item => (
              <Card key={item.id} padding="lg" radius="md" shadow="sm" withBorder>
                <Group align="flex-start" gap="md" wrap="nowrap">
                  <div aria-hidden className="tech-icon-wrap">
                    <span className={item.iconClass} />
                  </div>
                  <div>
                    <Text c="dark.8" fw={700} size="sm">
                      {item.label}
                    </Text>
                    <Text c="dimmed" lh={1.5} mt={6} size="xs">
                      {item.hint}
                    </Text>
                  </div>
                </Group>
              </Card>
            ))}
          </SimpleGrid>

          <Divider label="README 特性摘要" labelPosition="left" my="xl" />

          <Paper bg="white" p="lg" radius="md" shadow="xs" withBorder>
            <Stack gap="md">
              <Title c="dark.8" order={3} size="h4">
                产品能力（与 README「Features」对齐）
              </Title>
              <List
                c="dark.6"
                icon={(
                  <ThemeIcon
                    aria-hidden
                    color="indigo"
                    radius="xl"
                    size={24}
                    variant="light"
                  >
                    <span
                      className="icon-[logos--markdown]"
                      style={{ fontSize: 18 }}
                    />
                  </ThemeIcon>
                )}
                size="sm"
                spacing="xs"
              >
                {readmeFeatures.map(line => (
                  <List.Item key={line}>{line}</List.Item>
                ))}
              </List>
              <Text c="dimmed" fs="italic" size="sm">
                {readmeTechNote}
              </Text>
            </Stack>
          </Paper>

          <Paper bg="white" mt="xl" p="lg" radius="md" shadow="xs" withBorder>
            <Group align="flex-start" gap="lg" justify="space-between" wrap="wrap">
              <Stack gap="xs" maw={520}>
                <Title c="dark.8" order={3} size="h4">
                  图标与可访问性
                </Title>
                <Text c="dimmed" lh={1.65} size="sm">
                  使用矢量图标替代 emoji 作为结构装饰；列表与卡片保持足够对比度与触控高度（主按钮 ≥44px）。若系统开启「减少动态效果」，过渡时间会被压缩。
                </Text>
                <Text c="dimmed" size="xs">
                  图标集说明见
                  {" "}
                  <Anchor href={LOGOS_SET_URL} rel="noreferrer" size="xs" target="_blank">
                    icon-sets.iconify.design/logos
                  </Anchor>
                  。
                </Text>
              </Stack>
              <Group gap="lg" justify="center" wrap="wrap">
                <div aria-label="React" className="tech-icon-wrap" title="React">
                  <span className="icon-[logos--react]" />
                </div>
                <div aria-label="TypeScript" className="tech-icon-wrap" title="TypeScript">
                  <span className="icon-[logos--typescript-icon]" />
                </div>
                <div aria-label="Tailwind CSS" className="tech-icon-wrap" title="Tailwind CSS">
                  <span className="icon-[logos--tailwindcss-icon]" />
                </div>
                <div aria-label="ESLint" className="tech-icon-wrap" title="ESLint">
                  <span className="icon-[logos--eslint]" />
                </div>
              </Group>
            </Group>
          </Paper>

          <Text c="dimmed" mt="xl" size="xs" ta="center">
            MIT · Trapar-waves · 图标来自 Iconify logos（CC0），与 README 描述一致处已逐项列出。
          </Text>
        </Container>
      </main>
    </div>
  );
}
