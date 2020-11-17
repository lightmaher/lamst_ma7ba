using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class newlog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nummber",
                table: "Events");

            migrationBuilder.AddColumn<int>(
                name: "Number",
                table: "Events",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Number",
                table: "Events");

            migrationBuilder.AddColumn<int>(
                name: "Nummber",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
