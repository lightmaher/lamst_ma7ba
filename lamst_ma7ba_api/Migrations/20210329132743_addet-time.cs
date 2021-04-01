using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class addettime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "AddetTime",
                table: "Events",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddetTime",
                table: "Events");
        }
    }
}
