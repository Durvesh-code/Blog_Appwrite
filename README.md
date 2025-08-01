# Blog_Appwrite - A Modern React & Appwrite Blog Platform

Blog_Appwrite is a full-featured, modern blogging application built with React and Appwrite. It provides a clean and responsive interface for reading posts and a powerful rich text editor for creating and managing content. This project demonstrates a complete CRUD (Create, Read, Update, Delete) and authentication flow, showcasing the integration of a modern frontend stack with a secure Backend-as-a-Service.

---

## ✨ Features

* **Secure User Authentication**: Full signup, login, and logout functionality powered by Appwrite.
* **Post Management**: Complete CRUD operations for blog posts.
* **Rich Text Editor**: Uses **TinyMCE** for a powerful WYSIWYG editing experience.
* **File Uploads**: Seamlessly upload featured images for posts to Appwrite Storage.
* **Global State Management**: Centralized state management using **Redux Toolkit** for authentication status.
* **Client-Side Routing**: A smooth, single-page application experience handled by **React Router**.
* **Responsive Design**: Modern and fully responsive UI built with **Tailwind CSS**.
* **Protected Routes**: Certain actions and pages (like creating a post) are only accessible to authenticated users.

---

## 🛠️ Tech Stack

* **Frontend**: React.js
* **Backend**: Appwrite (Backend as a Service)
* **State Management**: Redux Toolkit
* **Routing**: React Router DOM
* **Styling**: Tailwind CSS
* **Rich Text Editor**: TinyMCE
* **Build Tool**: Vite

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* An Appwrite project. You can create one for free at [cloud.appwrite.io](https://cloud.appwrite.io).

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/Durvesh-code/Blog_Appwrite]
    ```
2.  **Navigate to the project directory**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Set up Environment Variables**
    * Create a copy of the example environment file:
        ```sh
        cp .env.example .env
        ```
    * Fill in the required variables in your new `.env` file with your Appwrite project credentials.

5.  **Run the application**
    ```sh
    npm run dev
    ```
