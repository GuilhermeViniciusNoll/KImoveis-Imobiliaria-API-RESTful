import Address from "./Address.entity"
import Schedule from "./Schedule.entity"
import Category from "./Category.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("realEstates")
class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "boolean", nullable: false, default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2, nullable: false, default: 0 })
    value: number | string

    @Column({ type: "integer" })
    size: number

    @CreateDateColumn({ type: "date" })
    createdAt: string

    @UpdateDateColumn({ type: "date" })
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]
}

export default RealEstate