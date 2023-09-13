import User from "./User.entity"
import RealEstate from "./RealEstate.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("schedules")
class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date", nullable: false })
    date: string

    @Column({ type: "time", nullable: false })
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate
}

export default Schedule