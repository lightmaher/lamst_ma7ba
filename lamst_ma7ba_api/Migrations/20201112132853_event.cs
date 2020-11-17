using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class @event : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Needs",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Nummber",
                table: "Events",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Needs",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Nummber",
                table: "Events");
        }
    }
}
