import { generateEntityId } from "@medusajs/utils"
import {
  BeforeCreate,
  Cascade,
  Entity,
  ManyToOne,
  OnInit,
  Property,
} from "@mikro-orm/core"
import AdjustmentLine from "./adjustment-line"
import ShippingMethod from "./shipping-method"

@Entity({ tableName: "cart_shipping_method_adjustment" })
export default class ShippingMethodAdjustment extends AdjustmentLine {
  @ManyToOne({
    entity: () => ShippingMethod,
    index: "IDX_adjustment_shipping_method_id",
    cascade: [Cascade.REMOVE, Cascade.PERSIST],
  })
  shipping_method: ShippingMethod

  @Property({ columnType: "text" })
  shipping_method_id: string

  @BeforeCreate()
  onCreate() {
    this.id = generateEntityId(this.id, "casmadj")
  }

  @OnInit()
  onInit() {
    this.id = generateEntityId(this.id, "casmadj")
  }
}
