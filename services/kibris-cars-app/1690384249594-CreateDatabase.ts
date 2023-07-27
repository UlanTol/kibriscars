import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1690384249594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('kibriscars', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('kibriscars', true);
  }
}
