"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2546],{79697:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.serialize=s.deserialize=void 0,s.deserialize=function(e){let s;return s="string"==typeof e?JSON.parse(e):function(e){const s=new DataView(e),t=s.getUint32(0),n=[];if(t<2)throw new Error("Invalid incoming Kernel Message");for(let e=1;e<=t;e++)n.push(s.getUint32(4*e));const r=new Uint8Array(e.slice(n[0],n[1])),i=JSON.parse(new TextDecoder("utf8").decode(r));i.buffers=[];for(let s=1;s<t;s++){const t=n[s],r=n[s+1]||e.byteLength;i.buffers.push(new DataView(e.slice(t,r)))}return i}(e),s},s.serialize=function(e){var s;let t;return t=(null===(s=e.buffers)||void 0===s?void 0:s.length)?function(e){const s=[],t=[],n=new TextEncoder;let r=[];void 0!==e.buffers&&(r=e.buffers,delete e.buffers);const i=n.encode(JSON.stringify(e));t.push(i.buffer);for(let e=0;e<r.length;e++){const s=r[e];t.push(ArrayBuffer.isView(s)?s.buffer:s)}const a=t.length;s.push(4*(a+1));for(let e=0;e+1<t.length;e++)s.push(s[s.length-1]+t[e].byteLength);const o=new Uint8Array(s[s.length-1]+t[t.length-1].byteLength),c=new DataView(o.buffer);c.setUint32(0,a);for(let e=0;e<s.length;e++)c.setUint32(4*(e+1),s[e]);for(let e=0;e<t.length;e++)o.set(new Uint8Array(t[e]),s[e]);return o.buffer}(e):JSON.stringify(e),t}},52546:(e,s,t)=>{t.r(s),t.d(s,{BaseKernel:()=>i,FALLBACK_KERNEL:()=>v,IKernelSpecs:()=>m,IKernels:()=>f,KernelSpecs:()=>y,Kernels:()=>g});var n=t(20435),r=t(32798);class i{constructor(e){this._history=[],this._executionCount=0,this._isDisposed=!1,this._disposed=new r.Signal(this),this._parentHeader=void 0,this._parent=void 0;const{id:s,name:t,location:n,sendMessage:i}=e;this._id=s,this._name=t,this._location=n,this._sendMessage=i}get ready(){return Promise.resolve()}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}get id(){return this._id}get name(){return this._name}get location(){return this._location}get executionCount(){return this._executionCount}get parentHeader(){return this._parentHeader}get parent(){return this._parent}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0))}async handleMessage(e){switch(this._busy(e),this._parent=e,e.header.msg_type){case"kernel_info_request":await this._kernelInfo(e);break;case"execute_request":await this._execute(e);break;case"input_reply":this.inputReply(e.content);break;case"inspect_request":await this._inspect(e);break;case"is_complete_request":await this._isCompleteRequest(e);break;case"complete_request":await this._complete(e);break;case"history_request":await this._historyRequest(e);break;case"comm_open":await this.commOpen(e);break;case"comm_msg":await this.commMsg(e);break;case"comm_close":await this.commClose(e)}this._idle(e)}stream(e,s){var t;const r=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"stream",session:null!==(t=null==r?void 0:r.session)&&void 0!==t?t:"",parentHeader:r,content:e});this._sendMessage(i)}displayData(e,s){var t,r;const i=void 0!==s?s:this._parentHeader;e.metadata=null!==(t=e.metadata)&&void 0!==t?t:{};const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"display_data",session:null!==(r=null==i?void 0:i.session)&&void 0!==r?r:"",parentHeader:i,content:e});this._sendMessage(a)}inputRequest(e,s){var t;const r=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"stdin",msgType:"input_request",session:null!==(t=null==r?void 0:r.session)&&void 0!==t?t:"",parentHeader:r,content:e});this._sendMessage(i)}publishExecuteResult(e,s){var t;const r=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"execute_result",session:null!==(t=null==r?void 0:r.session)&&void 0!==t?t:"",parentHeader:r,content:e});this._sendMessage(i)}publishExecuteError(e,s){var t;const r=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"error",session:null!==(t=null==r?void 0:r.session)&&void 0!==t?t:"",parentHeader:r,content:e});this._sendMessage(i)}updateDisplayData(e,s){var t;const r=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"update_display_data",session:null!==(t=null==r?void 0:r.session)&&void 0!==t?t:"",parentHeader:r,content:e});this._sendMessage(i)}clearOutput(e,s){var t;const r=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"clear_output",session:null!==(t=null==r?void 0:r.session)&&void 0!==t?t:"",parentHeader:r,content:e});this._sendMessage(i)}handleComm(e,s,t,r,i){var a;const o=void 0!==i?i:this._parentHeader,c=n.KernelMessage.createMessage({channel:"iopub",msgType:e,session:null!==(a=null==o?void 0:o.session)&&void 0!==a?a:"",parentHeader:o,content:s,metadata:t,buffers:r});this._sendMessage(c)}_idle(e){const s=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"idle"}});this._sendMessage(s)}_busy(e){const s=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"busy"}});this._sendMessage(s)}async _kernelInfo(e){const s=await this.kernelInfoRequest(),t=n.KernelMessage.createMessage({msgType:"kernel_info_reply",channel:"shell",session:e.header.session,parentHeader:e.header,content:s});this._sendMessage(t)}async _historyRequest(e){const s=e,t=n.KernelMessage.createMessage({msgType:"history_reply",channel:"shell",parentHeader:s.header,session:e.header.session,content:{status:"ok",history:this._history}});this._sendMessage(t)}_executeInput(e){const s=e,t=s.content.code,r=n.KernelMessage.createMessage({msgType:"execute_input",parentHeader:s.header,channel:"iopub",session:e.header.session,content:{code:t,execution_count:this._executionCount}});this._sendMessage(r)}async _execute(e){const s=e,t=s.content;t.store_history&&this._executionCount++,this._parentHeader=s.header,this._executeInput(s),t.store_history&&this._history.push([0,0,t.code]);const r=await this.executeRequest(s.content),i=n.KernelMessage.createMessage({msgType:"execute_reply",channel:"shell",parentHeader:s.header,session:e.header.session,content:r});this._sendMessage(i)}async _complete(e){const s=e,t=await this.completeRequest(s.content),r=n.KernelMessage.createMessage({msgType:"complete_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(r)}async _inspect(e){const s=e,t=await this.inspectRequest(s.content),r=n.KernelMessage.createMessage({msgType:"inspect_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(r)}async _isCompleteRequest(e){const s=e,t=await this.isCompleteRequest(s.content),r=n.KernelMessage.createMessage({msgType:"is_complete_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(r)}}var a=t(92877),o=t(79697),c=t(26169),l=t(11079);new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");const h=new Error("request for lock canceled");var u=function(e,s,t,n){return new(t||(t=Promise))((function(r,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function o(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var s;e.done?r(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(a,o)}c((n=n.apply(e,s||[])).next())}))};class d{constructor(e,s=h){if(this._maxConcurrency=e,this._cancelError=s,this._queue=[],this._waiters=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),s=new Promise(((e,s)=>this._queue.push({resolve:e,reject:s})));return e||this._dispatch(),s}runExclusive(e){return u(this,void 0,void 0,(function*(){const[s,t]=yield this.acquire();try{return yield e(s)}finally{t()}}))}waitForUnlock(){return u(this,void 0,void 0,(function*(){return this.isLocked()?new Promise((e=>this._waiters.push({resolve:e}))):Promise.resolve()}))}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let s=!1;this._currentReleaser=()=>{s||(s=!0,this._value++,this._resolveWaiters(),this._dispatch())},e.resolve([this._value--,this._currentReleaser])}_resolveWaiters(){this._waiters.forEach((e=>e.resolve())),this._waiters=[]}}class _{constructor(e){this._semaphore=new d(1,e)}acquire(){return e=this,s=void 0,n=function*(){const[,e]=yield this._semaphore.acquire();return e},new((t=void 0)||(t=Promise))((function(r,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function o(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var s;e.done?r(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(a,o)}c((n=n.apply(e,s||[])).next())}));var e,s,t,n}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}waitForUnlock(){return this._semaphore.waitForUnlock()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}var p=t(55941);class g{constructor(e){this._kernels=new a.ObservableMap,this._clients=new a.ObservableMap,this._kernelClients=new a.ObservableMap;const{kernelspecs:s}=e;this._kernelspecs=s}async startNew(e){const{id:s,name:t,location:n}=e,r=this._kernelspecs.factories.get(t);if(!r)return{id:s,name:t};const i=new _,a=(e,s,t)=>{var n;const r=this._kernels.get(e);if(!r)throw Error(`No kernel ${e}`);this._clients.set(s,t),null===(n=this._kernelClients.get(e))||void 0===n||n.add(s),t.on("message",(async e=>{let s;if(e instanceof ArrayBuffer)e=new Uint8Array(e).buffer,s=(0,o.deserialize)(e);else{if("string"!=typeof e)return;s=(0,o.deserialize)(e)}"input_reply"===s.header.msg_type?r.handleMessage(s):(async e=>{await i.runExclusive((async()=>{await r.ready,await r.handleMessage(e)}))})(s)}));const a=()=>{var t;this._clients.delete(s),null===(t=this._kernelClients.get(e))||void 0===t||t.delete(s)};r.disposed.connect(a),t.onclose=a},h=null!=s?s:c.UUID.uuid4(),u=`${g.WS_BASE_URL}api/kernels/${h}/channels`,d=this._kernels.get(h);if(d)return{id:d.id,name:d.name};const p=await r({id:h,sendMessage:e=>{const s=e.header.session,t=this._clients.get(s);if(!t)return void console.warn(`Trying to send message on removed socket for kernel ${h}`);const n=(0,o.serialize)(e);if("iopub"!==e.channel)t.send(n);else{const e=this._kernelClients.get(h);null==e||e.forEach((e=>{var s;null===(s=this._clients.get(e))||void 0===s||s.send(n)}))}},name:t,location:n});this._kernels.set(h,p),this._kernelClients.set(h,new Set);const f=new l.Server(u);return f.on("connection",(e=>{var s;const t=null!==(s=new URL(e.url).searchParams.get("session_id"))&&void 0!==s?s:"";a(h,t,e)})),f.on("close",(()=>{this._clients.keys().forEach((e=>{var s;const t=this._clients.get(e);(null==t?void 0:t.readyState)===WebSocket.CLOSED&&(this._clients.delete(e),null===(s=this._kernelClients.get(h))||void 0===s||s.delete(e))}))})),p.disposed.connect((()=>{f.close(),this._kernels.delete(h),this._kernelClients.delete(h)})),{id:p.id,name:p.name}}async restart(e){const s=this._kernels.get(e);if(!s)throw Error(`Kernel ${e} does not exist`);const{id:t,name:n,location:r}=s;return s.dispose(),this.startNew({id:t,name:n,location:r})}async shutdown(e){var s;null===(s=this._kernels.delete(e))||void 0===s||s.dispose()}}!function(e){e.WS_BASE_URL=p.PageConfig.getBaseUrl().replace(/^http/,"ws")}(g||(g={}));const f=new c.Token("@jupyterlite/kernel:IKernels"),v="javascript",m=new c.Token("@jupyterlite/kernel:IKernelSpecs");class y{constructor(){this._specs=new Map,this._factories=new Map}get specs(){return 0===this._specs.size?null:{default:this.defaultKernelName,kernelspecs:Object.fromEntries(this._specs)}}get defaultKernelName(){let e=p.PageConfig.getOption("defaultKernelName");if(!e&&this._specs.size){const s=Array.from(this._specs.keys());s.sort(),e=s[0]}return e||v}get factories(){return this._factories}register(e){const{spec:s,create:t}=e;this._specs.set(s.name,s),this._factories.set(s.name,t)}}}}]);
//# sourceMappingURL=2546.8fddf49.js.map