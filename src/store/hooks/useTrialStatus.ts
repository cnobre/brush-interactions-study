import { useAppSelector } from "..";
import { useCurrentStep } from "../../routes";
import { TrialResult } from "../types";

/**
 *
 * @param trialId Trial id for which to get status
 * @returns TrialResult object with complete status and any answer if present. Returns null if not in trial step
 */

export function useTrialStatus(trialId: string | null): TrialResult | null {
  const currentStep = useCurrentStep();
  const { config, trials } = useAppSelector((state) => state.study);

  if (
    currentStep.length === 0 ||
    !trialId ||
    !config ||
    config.components[currentStep]?.type !== "trials"
  )
    return null;

  const status: TrialResult | null = trials[currentStep][trialId];

  return (
    status || {
      complete: false,
      answer: null,
    }
  );
}
