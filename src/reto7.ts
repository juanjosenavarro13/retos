// En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

// Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

// Por ejemplo, si tenemos los siguientes almacenes:

// const a1 = ['bici', 'coche', 'bici', 'bici']
// const a2 = ['coche', 'bici', 'muñeca', 'coche']
// const a3 = ['bici', 'pc', 'pc']

export function getGiftsToRefill (a1: string[], a2: string[], a3: string[]): string[] {
  const gifts = a1.concat(a2).concat(a3)

  const orderGifts: string[] = gifts.filter((item, index): boolean => {
    return gifts.indexOf(item) === index
  })

  let dicGifts: Record<string, boolean> = {}

  orderGifts.forEach((gift): void => {
    if ((!a1.includes(gift) && !a2.includes(gift)) || (!a1.includes(gift) && !a3.includes(gift)) || (!a2.includes(gift) && !a3.includes(gift))) {
      dicGifts = { ...dicGifts, [gift]: true }
    }
  })

  return Object.keys(dicGifts)
}
