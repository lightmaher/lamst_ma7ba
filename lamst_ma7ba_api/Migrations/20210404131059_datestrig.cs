using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class datestrig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DateString",
                table: "photos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateString",
                table: "photos");
        }
    }
}
