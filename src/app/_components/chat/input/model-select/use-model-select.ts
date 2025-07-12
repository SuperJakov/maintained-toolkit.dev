"use client";

import { useMemo, useState } from "react";
import type { LanguageModel, LanguageModelCapability } from "@/ai/types";
import { allLanguageModels } from "@/ai/models/all";

interface UseModelSelectProps {
  selectedChatModel: LanguageModel | undefined;
  setSelectedChatModel: (model: LanguageModel) => void;
}

export const useModelSelect = ({
  setSelectedChatModel,
}: UseModelSelectProps) => {
  const availableProviders = useMemo(() => {
    return Array.from(new Set(allLanguageModels.map((model) => model.provider)));
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCapabilities, setSelectedCapabilities] = useState<
    LanguageModelCapability[]
  >([]);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  const handleModelSelect = (model: LanguageModel) => {
    setSelectedChatModel(model);
    setIsOpen(false);
  };

  const sortedModels = useMemo(() => {
    const providers = Array.from(
      new Set(allLanguageModels.map((model) => model.provider)),
    );
    const modelsByProvider = providers.reduce(
      (acc, provider) => {
        acc[provider] = allLanguageModels.filter(
          (model) => model.provider === provider,
        );
        return acc;
      },
      {} as Record<string, typeof allLanguageModels>,
    );

    const result: typeof allLanguageModels = [];
    let index = 0;
    while (result.length < allLanguageModels.length) {
      for (const provider of providers) {
        const providerModels = modelsByProvider[provider];
        const model = providerModels?.[index];
        if (model) {
          result.push(model);
        }
      }
      index++;
    }
    return result;
  }, []);

  const filteredModels = useMemo(() => {
    return sortedModels.filter((model) => {
      const matchesSearch =
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCapabilities =
        selectedCapabilities.length === 0 ||
        selectedCapabilities.every((capability) =>
          model.capabilities?.includes(capability),
        );

      const matchesProviders =
        selectedProviders.length === 0 ||
        selectedProviders.includes(model.provider);

      return matchesSearch && matchesCapabilities && matchesProviders;
    });
  }, [sortedModels, searchQuery, selectedCapabilities, selectedProviders]);

  const toggleCapability = (capability: LanguageModelCapability) => {
    setSelectedCapabilities((prev) =>
      prev.includes(capability)
        ? prev.filter((c) => c !== capability)
        : [...prev, capability],
    );
  };

  const toggleProvider = (provider: string) => {
    setSelectedProviders((prev) => {
      if (prev.includes(provider)) {
        return [];
      }
      return [provider];
    });
  };

  return {
    models: filteredModels,
    availableProviders,
    isOpen,
    setIsOpen,
    searchQuery,
    setSearchQuery,
    selectedCapabilities,
    selectedProviders,
    toggleCapability,
    toggleProvider,
    handleModelSelect,
  };
};
