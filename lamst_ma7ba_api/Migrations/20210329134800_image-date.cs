using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class imagedate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "photos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "photos");
        }
    }
}
