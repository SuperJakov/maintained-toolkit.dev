import {
  LanguageModelCapability,
  type ImageModel,
  type LanguageModel,
} from "@/ai/types";

const xaiLanguageModelData: Omit<LanguageModel, "provider">[] = [
  {
    name: "Grok 4",
    modelId: "grok-4",
    bestFor: ["Programming", "Complex math", "Reasoning"],
    capabilities: [
      LanguageModelCapability.Reasoning,
      LanguageModelCapability.ToolCalling,
      LanguageModelCapability.Vision,
    ],
    isNew: true,
    contextLength: 250_000,
    description:
      "Grok 4 is xAI's most powerful model to date, featuring multimodal understanding and a massive context window. Grok 4 is known to reason more than other reasoning models which improves its answers.",
  },
  {
    name: "Grok 3",
    modelId: "grok-3",
    description:
      "Grok 3 is xAI's flagship large language model built for advanced reasoning, creativity, and real-time knowledge integration.",
    capabilities: [LanguageModelCapability.ToolCalling],
    bestFor: ["General purpose", "Real-time information", "Analysis"],
    contextLength: 128000,
  },
  {
    name: "Grok 3 Mini",
    modelId: "grok-3-mini",
    description:
      "Grok 3 Mini is a compact version of Grok 3, optimized for speed and efficiency with reduced computational requirements.",
    capabilities: [
      LanguageModelCapability.ToolCalling,
      LanguageModelCapability.Reasoning,
    ],
    bestFor: ["Cost-effective", "Simple queries", "Quick tasks"],
    contextLength: 128000,
  },
];

export const xaiLanguageModels: LanguageModel[] = xaiLanguageModelData.map(
  (model) => ({
    ...model,
    provider: "x-ai",
  }),
);

const xaiImageModelData: Omit<ImageModel, "provider">[] = [
  {
    name: "Grok 2 Image",
    modelId: "grok-2-image",
    description: "Latest generation Grok model with enhanced capabilities",
  },
];

export const xaiImageModels: ImageModel[] = xaiImageModelData.map((model) => ({
  ...model,
  provider: "xai",
}));
