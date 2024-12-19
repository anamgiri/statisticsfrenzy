# Statistics Frenzy

An interactive learning platform for statistics and machine learning.

## Getting Started

[... existing content ...]

## Deployment

This project is set up for easy deployment on Vercel. Follow these steps to deploy your project and add a custom domain:

1. Push your code to a GitHub repository.
2. Log in to your Vercel account and click "New Project".
3. Import your GitHub repository.
4. Configure your project settings if needed, then click "Deploy".

### Adding a Custom Domain

To add a custom domain to your Vercel deployment:

1. Ensure you have deployed your project to Vercel.
2. There are two ways to add a custom domain:

   a. Using the Vercel Dashboard:
      - Go to your project dashboard on Vercel.
      - Click on the "Settings" tab.
      - Scroll down to the "Domains" section.
      - Enter your custom domain and click "Add".
      - Follow the instructions provided by Vercel to configure your DNS settings.

   b. Using the Vercel CLI:
      - Open your terminal.
      - Navigate to your project directory.
      - Run the following command:
        \`\`\`
        vercel domains add <your-domain.com>
        \`\`\`
      - Follow the prompts to complete the domain addition process.

3. If you see a message saying "No custom domains have been assigned", it means you need to add a domain using one of the methods above.

#### DNS Configuration

Typically, you'll need to add the following DNS records at your domain registrar:

- An A record pointing to Vercel's IP: 76.76.21.21
- If you're using www subdomain, add a CNAME record pointing to cname.vercel-dns.com

For more detailed instructions, refer to [Vercel's documentation on custom domains](https://vercel.com/docs/concepts/projects/custom-domains).

### Troubleshooting Custom Domains

If you're having issues with custom domains:

1. Verify that your DNS settings are correct.
2. Ensure that you have proper permissions to add domains to your Vercel project.
3. If you deployed using `vercel deploy --skip-domain`, run the deployment again without the `--skip-domain` flag.
4. Check your project settings in the Vercel dashboard to ensure there are no conflicts or issues with the domain configuration.

If problems persist, consult the [Vercel documentation](https://vercel.com/docs) or contact Vercel support for assistance.

## Security Considerations

When using a custom domain:

1. Ensure you have SSL/TLS encryption enabled (Vercel provides this by default).
2. Regularly monitor your domain settings and SSL certificate status.
3. Be cautious when setting up subdomains to avoid potential security vulnerabilities.

[... rest of the existing README content ...]

