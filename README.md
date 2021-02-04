# Basic TS & Docker to simplify sharing development environments

The goal of this project is to allow any developer that has docker installed to complile and run the code with a simple `docker-compose up`.
The eslint config isn't quite right but I've been leveraging what's built into VS Code so feel free to submit a pull request. 

This setup is fantastic for bootstrapping in developers who need to get going with typescript. This removes the need to install node on the machine.

By default we expose docker internal port 3000 to 60701.
Also take a look at how we mount folders so that relative access is preserved. 

Do not use this for production.

I will likely not keep this as updated as I should. I encourage you to use [tsconfig/bases](https://github.com/tsconfig/bases) as reasonable recommendations for your tsconfig.