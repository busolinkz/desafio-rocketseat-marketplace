# Desafio Angular Rocketseat

This application is a marketplace management panel built with Angular, inspired by the [Figma template](https://www.figma.com/community/file/1552330963598305030/gestao-de-marketplace-desafio-de-angular) from Rocketseat's Angular challenge.

## Project Overview

- **Frontend:** Developed in Angular 20, following best practices for maintainable, performant, and accessible code.
- **Design:** UI and UX are based on the official Figma template for the challenge.
- **Backend:** To run the application, you need the backend available at [rocketseat-education/desafio-rocketseat-angular-template (backend-gestao-marketplace)](https://github.com/rocketseat-education/desafio-rocketseat-angular-template/tree/01-layout-completo/backend-gestao-marketplace).

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/busolinkz/desafio-rocketseat-marketplace.git
   cd desafio-rocketseat
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend:**

   - Follow instructions in the [backend repository](https://github.com/rocketseat-education/desafio-rocketseat-angular-template/tree/01-layout-completo/backend-gestao-marketplace) to run the API server.

4. **Run the frontend:**
   ```bash
   npm run start
   ```
   - Open [http://localhost:4200](http://localhost:4200) in your browser.

## Features

- User authentication and protected routes
- Product listing, filtering, and creation
- Responsive layout and modern UI
- State management using Angular signals
- Follows Angular and TypeScript best practices

## Development

- **Code scaffolding:**  
  Use Angular CLI to generate new components:

  ```bash
  ng generate component component-name
  ```

- **Building:**  
  Compile the project for production:

  ```bash
  ng build
  ```

- **Testing:**  
  Run unit tests:
  ```bash
  ng test
  ```

## Resources

- [Figma Template](https://www.figma.com/community/file/1552330963598305030/gestao-de-marketplace-desafio-de-angular)
- [Backend Repository](https://github.com/rocketseat-education/desafio-rocketseat-angular-template/tree/01-layout-completo/backend-gestao-marketplace)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
