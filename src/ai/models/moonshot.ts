import { type LanguageModel, LanguageModelCapability } from "@/ai/types";

const moonshotModelData: Omit<LanguageModel, "provider">[] = [
  {
    name: "Kimi K2",
    modelId: "kimi-k2",
    bestFor: ["General Purpose"],
    capabilities: [LanguageModelCapability.ToolCalling],
    isNew: true,
    contextLength: 131000,
    description:
      "Kimi K2 is optimized for agentic capabilities, including advanced tool use, reasoning, and code synthesis. It's a Deepseek moment for agentic coding.",
  },
];

export const moonshotModels: LanguageModel[] = moonshotModelData.map(
  (model) => ({
    ...model,
    provider: "moonshotai",
  }),
);
