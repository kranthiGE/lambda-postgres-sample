import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';

@Table
export class IterationTasks extends Model<IterationTasks> {

  @PrimaryKey
  @Column
  public contractId!: number;

  @Column
  public contractName!: string;

  @Column
  public engineModel!: string;
  
  @Column
  public year!: number;

  @Column
  public qtr!: number;

  @Column
  public taskName!: string;
}
