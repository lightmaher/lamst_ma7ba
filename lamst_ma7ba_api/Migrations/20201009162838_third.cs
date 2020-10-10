using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Url",
                table: "Events",
                newName: "url");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "url",
                table: "Events",
                newName: "Url");
        }
    }
}
