using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Homebuilder.Api.Middlewares;
using Homebuilder.Domain.Repositories;
using Homebuilder.Infrastructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

namespace Homebuilder.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Homebuilder API", Version = "v1" });
            });
            Domain.Startup.Configure(connectionString);
            ConfigureCors(services, Configuration);
            ConfigureRepositories(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            loggerFactory.AddFile(Configuration.GetSection("Logging"));
            app.UseHttpStatusCodeExceptionMiddleware();
            app.UseCors("OriginPolicy");
            app.UseHttpsRedirection();
            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Homebuilder API");
            });
        }

        public static void ConfigureCors(IServiceCollection services, IConfiguration configuration)
        {
            IConfigurationSection corsOptions = configuration.GetSection("Cors");
            string origins = corsOptions["Origins"];
            services.AddCors(options =>
            {
                options.AddPolicy("OriginPolicy", builder =>
                {
                    builder.WithOrigins(origins.Split(",", StringSplitOptions.RemoveEmptyEntries).ToArray())
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
            });
        }

        private void ConfigureRepositories(IServiceCollection services)
        {
            services.AddTransient<IToDoTaskRepository, ToDoTaskRepository>();
        }
    }
}
