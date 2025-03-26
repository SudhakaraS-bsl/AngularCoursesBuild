
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dynamic"
  },
  {
    "renderMode": 2,
    "route": "/exam"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/student"
  },
  {
    "renderMode": 2,
    "route": "/subject"
  },
  {
    "renderMode": 2,
    "route": "/teacher"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: 'de911203dbe89ac1ddaa8d3badf30932b2d2d63e42de69cf08f550bc561501ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'e3307ea7234dfb78f5f3b4ffede88cfd58dcd660d641621adba5dc6398a92972', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dynamic/index.html': {size: 2502, hash: '1fea44adea77b35d07ece5e93506bf43ac638a8cfca1c456688c4666574be85d', text: () => import('./assets-chunks/dynamic_index_html.mjs').then(m => m.default)},
    'exam/index.html': {size: 2493, hash: '22ecf35d34de4d3fcca28fbd6d931eb5e5ce528179fcfee3b6107f3e11919710', text: () => import('./assets-chunks/exam_index_html.mjs').then(m => m.default)},
    'subject/index.html': {size: 2501, hash: 'e87c2d31294bb9fa608d18684e8162170a9b64ccc2e710f8578c5429298ab1bc', text: () => import('./assets-chunks/subject_index_html.mjs').then(m => m.default)},
    'teacher/index.html': {size: 2503, hash: '5e2f622d995c4f0ee5a3e5618e8691ed9149e8d14f6b4989bcbed35dee128b5b', text: () => import('./assets-chunks/teacher_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7040, hash: '5e461516b7847b221193276a20f3c38340c7adcb9db230789e4e3162380613a7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7040, hash: '5e461516b7847b221193276a20f3c38340c7adcb9db230789e4e3162380613a7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'student/index.html': {size: 2502, hash: '3cc20a3a5e0db1e469790a5fa4ff17d4066aa0fcfbab6120df86d6c17af1dda5', text: () => import('./assets-chunks/student_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
