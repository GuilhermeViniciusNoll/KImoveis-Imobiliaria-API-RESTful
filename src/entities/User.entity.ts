import { getRounds, hashSync } from "bcryptjs"
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 45, nullable: false })
    name: string

    @Column({ type: "varchar", length: 45, nullable: false, unique: true })
    email: string

    @Column({ type: "boolean", nullable: false, default: false })
    admin: boolean

    @Column({ type: "varchar", length: 120, nullable: false })
    password: string

    @CreateDateColumn({ type: "date", nullable: false })
    createdAt: string

    @UpdateDateColumn({ type: "date", nullable: false })
    updatedAt: string

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt: string | null

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        getRounds(this.password) ? null : this.password = hashSync(this.password, 10)
    }
}

export default User