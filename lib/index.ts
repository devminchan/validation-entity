import { BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm';
import { validateOrReject } from 'class-validator';

export default abstract class ValidationEntity extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
