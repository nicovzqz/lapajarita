# 🍷 La Pajarita - Ecommerce de Bebidas Alcohólicas

Sitio web ecommerce completo para "La Pajarita", una tienda especializada en bebidas alcohólicas premium con diseño moderno y funcionalidades avanzadas.

## ✨ Características Principales

- **Página de Productos Separada**: Catálogo completo en página independiente
- **Selector de Cantidad**: Cada producto permite seleccionar cantidad antes de agregar
- **Sistema de Descuentos**: 5% de descuento automático en múltiplos de 6 unidades
- **Precios Escalados**: Precios ajustados x10 para mayor realismo
- **Carrito Inteligente**: Calcula descuentos automáticamente y muestra ahorros
- **Checkout Avanzado**: Proceso completo con cálculo de descuentos y impuestos
- **Navegación Mejorada**: Enlaces directos a categorías desde página principal
- **Diseño Responsivo**: Totalmente optimizado para todos los dispositivos
- **Búsqueda Avanzada**: Búsqueda en tiempo real en página dedicada
- **Accesibilidad**: Cumple con estándares WCAG AA

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox/Grid
- **JavaScript ES6+**: Programación orientada a objetos y funcional
- **Font Awesome**: Iconografía completa
- **Google Fonts**: Tipografías Playfair Display e Inter

### Herramientas de Desarrollo
- **VS Code**: Editor principal con extensiones
- **Live Server**: Servidor local para desarrollo
- **LocalStorage**: Persistencia de datos del carrito

## 📁 Estructura del Proyecto

```
pajarita/
├── 📁 .github/
│   └── copilot-instructions.md
├── 📁 .vscode/
│   └── tasks.json
├── 📁 css/
│   └── styles.css (1400+ líneas con nuevos estilos)
├── 📁 js/
│   ├── products.js (gestión de productos con descuentos)
│   ├── cart.js (carrito con cálculo de descuentos)
│   └── main.js (funcionalidades principales)
├── 📁 images/
│   └── (placeholders para imágenes)
├── 📁 pages/
│   └── checkout.html (checkout con descuentos)
├── index.html (página principal sin productos)
├── productos.html (página dedicada de productos)
└── README.md
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **VS Code** instalado
- **Python 3.x** (para servidor local)
- **Navegador web moderno**

### Pasos de Instalación

1. **Clonar/Descargar el proyecto**
   ```bash
   # Si tienes Git
   git clone [url-del-repositorio]
   cd pajarita
   ```

2. **Abrir en VS Code**
   ```bash
   code .
   ```

3. **Instalar extensiones recomendadas**
   - Live Server
   - HTML CSS Support
   - Auto Rename Tag (ya instalada)
   - CSS Peek (ya instalada)

4. **Ejecutar el servidor local**
   - Usar la tarea configurada: `Ctrl+Shift+P` → "Tasks: Run Task" → "Servir La Pajarita"
   - O manualmente: `python -m http.server 3000`

5. **Abrir en el navegador**
   - Visitar: http://localhost:3000
   - O usar Live Server para desarrollo

## 🎯 Funcionalidades Detalladas

### Página de Productos Dedicada
- **15 productos premium** con precios escalados (x10)
- **4 categorías** organizadas: Vinos, Licores, Cervezas, Champagne
- **Selector de cantidad** en cada producto (1 hasta stock disponible)
- **Indicador de descuento** cuando se seleccionan múltiplos de 6
- **Filtros por categoría** con navegación desde página principal

### Sistema de Descuentos Inteligente
- ✅ **5% de descuento automático** en múltiplos de 6 unidades
- ✅ **Indicadores visuales** de descuentos aplicados
- ✅ **Cálculo en tiempo real** en carrito y checkout
- ✅ **Totales desglosados** mostrando ahorros

### Carrito Avanzado
- ✅ **Persistencia en LocalStorage** con descuentos
- ✅ **Cálculo automático** de subtotales y descuentos
- ✅ **Validación de stock** en tiempo real
- ✅ **Notificaciones inteligentes** sobre descuentos
- ✅ **Vista detallada** con precios originales y descontados

### Proceso de Checkout Completo
- ✅ **Resumen detallado** con descuentos aplicados
- ✅ **Cálculo de impuestos** sobre precio final
- ✅ **Formulario completo** de datos y pago
- ✅ **Validaciones avanzadas** en tiempo real
- ✅ **Confirmación final** con totales exactos

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: `#8B0000` (Rojo vino)
- **Secundario**: `#FFD700` (Dorado)
- **Acento**: `#2C1810` (Marrón oscuro)
- **Fondo**: `#FAFAFA` (Gris claro)

### Tipografías
- **Títulos**: Playfair Display (Serif elegante)
- **Contenido**: Inter (Sans-serif moderna)

### Animaciones
- Transiciones suaves con `cubic-bezier`
- Efectos hover en tarjetas y botones
- Animaciones de entrada con `fadeInUp`
- Loading states para procesos asíncronos

## 📱 Responsividad

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

### Adaptaciones
- Menú hamburguesa en móvil
- Grid responsivo para productos
- Formularios adaptables
- Optimización de touch targets

## 🔧 Desarrollo

### Estructura del Código JavaScript

#### `products.js`
- Gestión de la base de datos de productos
- Renderizado dinámico del catálogo
- Filtrado y búsqueda
- Modales de productos

#### `cart.js`
- Clase `ShoppingCart` con métodos completos
- Persistencia en LocalStorage
- Gestión de stock y validaciones
- Sistema de notificaciones

#### `main.js`
- Inicialización de la aplicación
- Navegación y scroll suave
- Formulario de contacto
- Utilidades generales

### CSS Modular
- Variables CSS para consistencia
- Metodología BEM parcial
- Componentes reutilizables
- Media queries organizadas

## 🧪 Testing y Validación

### Validaciones Implementadas
- ✅ Formularios con validación HTML5
- ✅ Validación de email personalizada
- ✅ Control de stock en tiempo real
- ✅ Sanitización de inputs

### Compatibilidad
- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Android Chrome
- ✅ Accesibilidad WCAG AA
- ✅ Performance optimizada

## 🚀 Comandos Útiles

### Desarrollo
```bash
# Iniciar servidor local
python -m http.server 3000

# O usar Live Server desde VS Code
# Clic derecho en index.html > "Open with Live Server"
```

### Debugging
```bash
# Inspeccionar en navegador
F12 (Chrome DevTools)

# Ver console logs de la aplicación
console.log('🍷 La Pajarita - Debug info')
```

## 📈 Futuras Mejoras

### Funcionalidades Pendientes
- [ ] **Backend real** con Node.js/Express
- [ ] **Base de datos** PostgreSQL/MongoDB
- [ ] **Autenticación** de usuarios
- [ ] **Pagos reales** con Stripe/PayPal
- [ ] **Envío de emails** de confirmación
- [ ] **Panel administrativo**
- [ ] **Reviews y ratings** de productos
- [ ] **Wishlist** personal
- [ ] **Recomendaciones** por IA
- [ ] **PWA** (Progressive Web App)

### Optimizaciones Técnicas
- [ ] **Lazy loading** de imágenes
- [ ] **Service Workers** para cache
- [ ] **Optimización SEO** avanzada
- [ ] **Analytics** y tracking
- [ ] **Tests automatizados**
- [ ] **CI/CD** pipeline

## 🤝 Contribución

### Cómo Contribuir
1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### Estilo de Código
- **ES6+** para JavaScript
- **BEM** para CSS cuando sea apropiado
- **Comentarios descriptivos**
- **Nombres de variables en español**
- **Funciones pequeñas y específicas**

## 📝 Licencia

Este proyecto es una demostración educativa. Los assets de ejemplo son placeholders.

## 📞 Contacto

- **Email**: info@lapajarita.com
- **Teléfono**: +1 (555) 123-4567
- **Dirección**: Calle Principal 123, Centro Histórico

---

**⚠️ Advertencia Legal**: Este es un sitio de demostración. Prohibida la venta de bebidas alcohólicas a menores de edad.

**🍷 ¡Disfruta responsablemente!**

---

*Desarrollado con ❤️ para demostrar las mejores prácticas en desarrollo web frontend*