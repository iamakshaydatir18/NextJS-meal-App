# NextJS-meal-App
Developed meal App with NextJs  


# Next.js Meal Website

Welcome to the Next.js Meal Website! This project is a platform for sharing and viewing meal recipes. It also features a foodie community where users can connect and interact with each other.

## Features

- **Share Meal Recipes**: Users can share their favorite meal recipes with detailed instructions and images.
- **View Meal Recipes**: Browse through a variety of meal recipes shared by the community.
- **Connect with Foodie Community**: Engage with other food enthusiasts, share experiences, and discuss recipes.
- **Image Storage**: Images are stored on Amazon S3, ensuring reliable and scalable storage.
- **Database**: Utilizes `better-sqlite3` for efficient and easy-to-use database management.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Database**: [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- **Image Storage**: [Amazon S3](https://aws.amazon.com/s3/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 14.x or later)
- npm (version 6.x or later) or Yarn (version 1.x or later)
- AWS Account and S3 Bucket

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/nextjs-meal-website.git
    cd nextjs-meal-website
    ```

2. **Install dependencies**

    Using npm:

    ```bash
    npm install
    ```

    Or using Yarn:

    ```bash
    yarn install
    ```

3. **Configure environment variables**

    Create a `.env.local` file in the root of the project and add your AWS S3 configuration and any other necessary environment variables:

    ```env
    AWS_ACCESS_KEY_ID=your-aws-access-key-id
    AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
    S3_BUCKET_NAME=your-s3-bucket-name
    S3_REGION=your-s3-region
    ```

4. **Initialize the database**

    Run the following command to create and seed the database with dummy data:

    ```bash
    npm run initdb
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## Deployment

The deployment process will vary based on your hosting provider. Below is an example of deploying to Vercel, which is the recommended platform for Next.js applications.

### Deploying to Vercel

1. **Login to Vercel**

    ```bash
    vercel login
    ```

2. **Deploy the application**

    ```bash
    vercel
    ```

    Follow the prompts to link your project to Vercel and deploy it.

### Configure Environment Variables in Vercel

Ensure you add the necessary environment variables (AWS S3 credentials, etc.) in the Vercel dashboard under your project's settings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to suggest.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README file to better suit your project's specifics and details.