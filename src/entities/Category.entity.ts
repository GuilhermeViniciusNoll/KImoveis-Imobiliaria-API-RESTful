import RealEstate from "./RealEstate.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm"

@Entity("categories")
class Category {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 45, nullable: false, unique: true })
    name: string

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: RealEstate[]
}

export default Category