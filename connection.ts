// Datos del evento. Sustituye estos valores antes de distribuir el launcher.
// La IP del servidor sigue configurada en los modpacks, no aquí.
export type RadminEventNetwork = {
  name: string
  password: string
}

// Valores de respaldo usados solamente si GitHub no está disponible.
export const radminEventNetwork: RadminEventNetwork = {
  name: "NOMBRE_DE_LA_RED",
  password: "CONTRASEÑA"
}
