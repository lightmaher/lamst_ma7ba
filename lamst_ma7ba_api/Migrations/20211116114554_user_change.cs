using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class user_change : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "clints");

            migrationBuilder.AddColumn<string>(
                name: "IdNumber",
                table: "clints",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_clints",
                table: "clints",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_clints",
                table: "clints");

            migrationBuilder.DropColumn(
                name: "IdNumber",
                table: "clints");

            migrationBuilder.RenameTable(
                name: "clints",
                newName: "Users");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");
        }
    }
}
