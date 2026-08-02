export interface ThemeOption {
  key: "gold" | "ocean" | "sea" | "floral";
  label: string;
  swatch: string;
}

export const accentThemes: ThemeOption[] = [
  { key: "gold", label: "Signature Gold", swatch: "#b8862f" },
  { key: "ocean", label: "Ocean Blue", swatch: "#0f6e93" },
  { key: "sea", label: "Sea Green", swatch: "#0d7a5f" },
  { key: "floral", label: "Floral Warm", swatch: "#b6532f" },
];
