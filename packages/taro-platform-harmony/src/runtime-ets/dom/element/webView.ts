import business_error from '@ohos.base'
import web_webview from '@ohos.web.webview'
// import type { TaroAny } from '@tarojs/runtime'
import { TaroElement } from './element'

import type { WebViewProps } from '@tarojs/components/types'

export function isTaroInnerHtmlElement (item: TaroAny): item is TaroInnerHtmlElement{
  return item?.tagName === "INNER-HTML"
}

@Observed
export class TaroInnerHtmlElement extends TaroElement {
  constructor() {
    super('InnerHtml')
  }
}

export function isTaroWebViewElement (item: TaroAny): item is TaroWebViewElement{
  return item?.tagName === "WEB-VIEW"
}

@Observed
export class TaroWebViewElement extends TaroElement<WebViewProps> {
  ports: web_webview.WebMessagePort[] = []

  nativePort: web_webview.WebMessagePort | null = null

  message: web_webview.WebMessageExt = new web_webview.WebMessageExt()

  controller: web_webview.WebviewController = new web_webview.WebviewController()

  constructor() {
    super('WebView')
  }

  postMessage (value: string) {
    if (!this.nativePort) return

    this.message.setString(value)
    this.nativePort.postMessageEventExt(this.message)
  }

  handleMessageFromWeb (result: web_webview.WebMessageExt) {
    try {
      const type = result.getType()
      switch (type) {
        case web_webview.WebMessageType.STRING: {
          return result.getString()
        }
        case web_webview.WebMessageType.NUMBER: {
          return result.getNumber()
        }
        case web_webview.WebMessageType.BOOLEAN: {
          return result.getBoolean()
        }
        case web_webview.WebMessageType.ARRAY_BUFFER: {
          return result.getArrayBuffer()
        }
        case web_webview.WebMessageType.ARRAY: {
          return result.getArray()
        }
        case web_webview.WebMessageType.ERROR: {
          return result.getError()
        }
        default: {
          return null
        }
      }
    } catch (error) {
      const e: business_error.BusinessError = error as business_error.BusinessError

      console.error(`ErrorCode: ${e.code},  Message: ${e.message}`)
    }
  }
}
