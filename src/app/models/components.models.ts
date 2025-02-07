export interface Components {
    title: string;                    // Título o nombre del componente
    icon?: string;                    // Icono del componente (opcional)
    url?: string;                     // URL asociada al componente (opcional)
    text?: string;                    // Texto asociado al componente (opcional)
    classes?: string;                 // Clases CSS personalizadas (opcional)
    type: 'button' | 'card' | 'input' | 'select' | 'toggle' | 'radio' | 'checkbox' | 'range' | 'date' | 'textarea'; // Tipo de componente
    platform: 'ios' | 'md' | 'wp' | 'universal'; // Plataforma para mostrar el componente
    label?: string;                   // Etiqueta para componentes como input
    placeholder?: string;             // Placeholder para componentes de tipo input
    content?: string;                 // Contenido dentro del componente (opcional)
    value?: string;                      // Valor de componentes como inputs o selects
    disabled?: boolean;               // Habilitado o deshabilitado
    required?: boolean;               // Si es requerido para la validación
    readonly?: boolean;               // Solo lectura para componentes como input
    options?: Array<{                // Opciones para componentes como select, radio o checkbox
        label: string;
        value: string;
    }>;
}
