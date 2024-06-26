export type InfoTagProps = {
  text: string;
  icon: React.ReactNode;
  link?: string;
  showExternalIcon?: boolean;
};

export type EnabledTagsConfig<T> = Partial<Record<keyof T, boolean>>;

export type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// Needed here because it's defined in nextui-org/react
export type Selection = 'all' | Set<string | number>;
