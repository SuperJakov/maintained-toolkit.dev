import { type LanguageModel, LanguageModelCapability } from "@/ai/types";

const deepseekModelData: Omit<LanguageModel, "provider">[] = [
  {
    name: "DeepSeek R1",
    modelId: "deepseek-r1-0528",
    description:
      "DeepSeek R1 is a large language model optimized for various natural language processing tasks",
    capabilities: [LanguageModelCapability.Reasoning],
    bestFor: ["General purpose", "Text generation", "Conversation"],
    contextLength: 131072,
  },
  {
    name: "DeepSeek V3",
    modelId: "deepseek-chat-v3-0324",
    description:
      "DeepSeek V3 is the latest generation of DeepSeek models with enhanced capabilities",
    capabilities: [LanguageModelCapability.ToolCalling],
    bestFor: ["Advanced reasoning", "Code generation", "Creative writing"],
    contextLength: 131072,
  },
];

export const deepseekModels: LanguageModel[] = deepseekModelData.map(
  (model) => ({
    ...model,
    provider: "deepseek",
  }),
);
