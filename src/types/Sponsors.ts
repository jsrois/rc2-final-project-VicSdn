type SponsorId =
  | "Ayuntamiento"
  | "baccara"
  | "asturtoner"
  | "puntoycoma"
  | "laabadia"
  | "refierta"
  | "cajarural"
  | "lozano"
  | "maxibon"
  | "infojobs";
type SponsorName =
  | "Ayuntamiento Cangas del Narcea"
  | "Baccara"
  | "Asturtoner"
  | "Punto y Coma"
  | "La Abadía"
  | "Refierta"
  | "Caja Rural"
  | "Transportes Lozano"
  | "Maxibon"
  | "InfoJobs";

export interface Sponsors {
  id: SponsorId;
  name: SponsorName;
  url: string;
  image: {
    width: number;
    height: number;
  };
}
