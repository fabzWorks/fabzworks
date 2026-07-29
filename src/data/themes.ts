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







// export interface ThemeOption {
//   key: "gold" | "ocean" | "sea" | "floral" | "emerald" | "nordic" | "berry" | "sunset";
//   label: string;
//   swatch: string;
// }

// export const accentThemes: ThemeOption[] = [
//   { key: "gold", label: "Signature Gold", swatch: "#b8862f" },
//   { key: "ocean", label: "Ocean Blue", swatch: "#0f6e93" },
//   { key: "sea", label: "Sea Green", swatch: "#0d7a5f" },
//   { key: "floral", label: "Floral Warm", swatch: "#b6532f" },
//   { key: "emerald", label: "Emerald Mint", swatch: "#059669" },
//   { key: "nordic", label: "Nordic Frost", swatch: "#475569" },
//   { key: "berry", label: "Wild Berry", swatch: "#db2777" },
//   { key: "sunset", label: "Sunset Glow", swatch: "#ea580c" }, // Vibrant Golden-Orange Theme
// ];
