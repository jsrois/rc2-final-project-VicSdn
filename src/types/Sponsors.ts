type SponsorId =
  | "Ayuntamiento"
  | "baccara"
  | "asturtoner"
  | "puntoycoma"
  | "laabadia"
  | "refierta"
  | "cajarural"
  | "lozano"
  | "javita"
  | "manin";
type SponsorName =
  | "Ayuntamiento Cangas del Narcea"
  | "Baccara"
  | "Asturtoner"
  | "Punto y Coma"
  | "La Abadía"
  | "Refierta"
  | "Caja Rural"
  | "Transportes Lozano"
  | "Javita"
  | "Manin";

export interface Sponsors {
  id: SponsorId;
  name: SponsorName;
  url: string;
  image: {
    width: number;
    height: number;
  };
}
