export const users = {
  director: {
    username: 'director',
    password: 'director',
    name: 'Juan Pérez',
    role: 'Director',
    avatar: 'D'
  },
  administrador: {
    username: 'administrador',
    password: 'administrador',
    name: 'María Gómez',
    role: 'Administrador',
    avatar: 'A'
  },
  docente: {
    username: 'docente',
    password: 'docente',
    name: 'Carlos Ruiz',
    role: 'Docente',
    avatar: 'P'
  },
  padre: {
    username: 'padre',
    password: 'padre',
    name: 'Laura Fernández',
    role: 'Padre de Familia',
    avatar: 'F',
    children: [
      { name: 'Ana Fernández', grade: '5to Primaria' },
      { name: 'Luis Fernández', grade: '3ro Secundaria' }
    ]
  }
};