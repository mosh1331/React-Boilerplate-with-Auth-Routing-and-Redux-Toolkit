# React Boilerplate with Auth, Routing, Redux Toolkit, and Tailwind CSS

## Overview

This is a React boilerplate project designed to kickstart your web application development with essential features already set up. It includes routing, authentication, state management, API handling, and styling, making it an excellent foundation for modern web apps.

## Features

- **React Router DOM**: Pre-configured routing with private and public routes.
- **Authentication**: Basic register and login forms with validation using React Hook Form and Yup.
- **Redux Toolkit**: Integrated with state persistence, featuring an `authSlice` for authentication handling.
- **Axios**: Configured for API calls, with separate setups for public APIs and protected APIs that require authentication tokens.
- **Tailwind CSS**: Tailwind CSS is set up for utility-first styling, providing rapid and consistent design.

## Folder Structure

The project is structured to maintain clarity and modularity:

```plaintext
src/
├── components/        # Reusable components
├── layouts/           # Layout components for different sections
├── pages/             # Main page components (e.g., Home, Login, Register)
├── redux/             # Redux slices and store configuration
├── routes/            # Routing logic, including private and public routes
├── service/           # Axios configurations and API service calls
├── utils/             # Utility functions used across the project
├── App.js             # Main App component
├── index.js           # Entry point of the application
```


## Installation

To get started with this boilerplate:


1. Install dependencies:
```bash
    git clone https://github.com/mosh1331/React-Boilerplate-with-Auth-Routing-and-Redux-Toolkit.git
    cd React-Boilerplate-with-Auth-Routing-and-Redux-Toolkit
 ```   

2. Remove the existing Git remote to detach from the original repository:  
```bash
    git remote remove origin
```

3. (Optional) Initialize a new Git repository if you want to start fresh:
```bash
    rm -rf .git
    git init
```

4. Install dependencies:
```bash
    npm install
```

5. Run the development server:
```bash
    npm start
```
    

## Usage

This boilerplate provides a solid foundation for any React project. You can extend the existing features or add new ones according to your project's requirements.

## Contributing
If you'd like to contribute, feel free to submit a pull request or open an issue for any bugs or feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.