using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace lamst_ma7ba_Api.Migrations
{
    public partial class update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_placeGalleries_places_PlaceId",
                table: "placeGalleries");

            migrationBuilder.DropPrimaryKey(
                name: "PK_placeGalleries",
                table: "placeGalleries");

            migrationBuilder.RenameTable(
                name: "placeGalleries",
                newName: "PlaceGallery");

            migrationBuilder.RenameIndex(
                name: "IX_placeGalleries_PlaceId",
                table: "PlaceGallery",
                newName: "IX_PlaceGallery_PlaceId");

            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "Events",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PlaceGallery",
                table: "PlaceGallery",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_PlaceGallery_places_PlaceId",
                table: "PlaceGallery",
                column: "PlaceId",
                principalTable: "places",
                principalColumn: "PlaceId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlaceGallery_places_PlaceId",
                table: "PlaceGallery");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PlaceGallery",
                table: "PlaceGallery");

            migrationBuilder.RenameTable(
                name: "PlaceGallery",
                newName: "placeGalleries");

            migrationBuilder.RenameIndex(
                name: "IX_PlaceGallery_PlaceId",
                table: "placeGalleries",
                newName: "IX_placeGalleries_PlaceId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Events",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_placeGalleries",
                table: "placeGalleries",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_placeGalleries_places_PlaceId",
                table: "placeGalleries",
                column: "PlaceId",
                principalTable: "places",
                principalColumn: "PlaceId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
