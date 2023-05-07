type Render = (generator: AsyncGenerator<string, void>) => Deno.Reader

type Context = {
  height: number
  prev: string
}

export const render: Render = (generator) => {
  const ctx: Context = { height: 0, prev: '' }

  const clear = (value: string): string => {
    // const data = `\x1b[A\x1b[2K`.repeat(ctx.height)
    const data = `\r${ctx.height ? `\x1b[${ctx.height}A` : ''}\x1b[J`

    ctx.height = value.split('\n').length - 1

    return data
  }

  const encode = (value: string): Uint8Array => {
    const data = `${value}${value.endsWith('\n') ? '' : '\n'}`

    return new TextEncoder().encode(`${clear(data)}${data}`)
  }


  const read: Deno.Reader['read'] = async (buffer) => {
    const { value, done } = await generator.next()
    if (done) return null

    const payload = encode(value)
    buffer.set(payload)

    return payload.length
  }

  return { read }
}
