// tests/unit/HelloWorld.spec.js
import { render } from '@testing-library/vue'
import HelloWorld from '@/components/HelloWorld.vue'  // درست
import App from '@/App.vue'                          // درست

describe('HelloWorld.vue', () => {
  it('پیام ارسالی را درست نمایش می‌دهد', () => {
    const msg = 'سلام تست!'
    const { getByText } = render(HelloWorld, { props: { msg } })

    expect(getByText((_, el) => el?.tagName.toLowerCase() === 'h1' && el?.textContent?.includes(msg)))
      .toBeInTheDocument()
  })

  it('پاراگراف ثابت را نمایش می‌دهد', () => {
    const { getByText } = render(HelloWorld, { props: { msg: 'هر چیزی' } })
    expect(getByText(/این پروژه تو با Vite و Vue است!/)).toBeInTheDocument()
  })
})

describe('App.vue', () => {
  it('لوگوی Vue را با alt درست رندر می‌کند', () => {
    const { getByAltText } = render(App)
    expect(getByAltText('Vue logo')).toBeInTheDocument()
  })

  it('پیام اصلی را نمایش می‌دهد', () => {
    const { getByText } = render(App)
    expect(getByText(/سلام دنیا!/)).toBeInTheDocument()
  })
})