(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{201:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return t?i.a.createElement(b,c(c({ref:n},s),{},{components:t})):i.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(7),r=(t(0),t(201)),o={title:"Patch Traits"},c={unversionedId:"cue/patch-trait",id:"cue/patch-trait",isDocsHomePage:!1,title:"Patch Traits",description:"Patch is a very common pattern of trait definitions, i.e. the app operators can amend/path attributes to the component instance (normally the workload) to enable certain operational features such as sidecar or node affinity rules (and this should be done before the resources applied to target cluster).",source:"@site/docs/cue/patch-trait.md",slug:"/cue/patch-trait",permalink:"/zh/docs/cue/patch-trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cue/patch-trait.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1617860365,formattedLastUpdatedAt:"4/8/2021",sidebar:"docs",previous:{title:"How-to",permalink:"/zh/docs/cue/trait"},next:{title:"Status Write Back",permalink:"/zh/docs/cue/status"}},p=[{value:"Known Limitations",id:"known-limitations",children:[]},{value:"Strategy Patch",id:"strategy-patch",children:[]},{value:"More Use Cases of Patch Trait",id:"more-use-cases-of-patch-trait",children:[{value:"Add Labels",id:"add-labels",children:[]},{value:"Add Annotations",id:"add-annotations",children:[]},{value:"Add Pod Environments",id:"add-pod-environments",children:[]},{value:"Inject <code>ServiceAccount</code> Based on External Auth Service",id:"inject-serviceaccount-based-on-external-auth-service",children:[]},{value:"Add <code>InitContainer</code>",id:"add-initcontainer",children:[]}]}],s={toc:p};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Patch")," is a very common pattern of trait definitions, i.e. the app operators can amend/path attributes to the component instance (normally the workload) to enable certain operational features such as sidecar or node affinity rules (and this should be done ",Object(r.b)("strong",{parentName:"p"},"before")," the resources applied to target cluster)."),Object(r.b)("p",null,"This pattern is extremely useful when the component definition is provided by third-party component provider (e.g. software distributor) so app operators do not have privilege to change its template."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that even patch trait itself is defined by CUE, it can patch any component regardless how its schematic is defined (i.e. CUE, Helm, and any other supported schematic approaches).")),Object(r.b)("p",null,"Below is an example for ",Object(r.b)("inlineCode",{parentName:"p"},"node-affinity")," trait:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "affinity specify node affinity and toleration"\n  name: node-affinity\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                if parameter.affinity != _|_ {\n                    affinity: nodeAffinity: requiredDuringSchedulingIgnoredDuringExecution: nodeSelectorTerms: [{\n                        matchExpressions: [\n                            for k, v in parameter.affinity {\n                                key:      k\n                                operator: "In"\n                                values:   v\n                            },\n                        ]}]\n                }\n                if parameter.tolerations != _|_ {\n                    tolerations: [\n                        for k, v in parameter.tolerations {\n                            effect:   "NoSchedule"\n                            key:      k\n                            operator: "Equal"\n                            value:    v\n                        }]\n                }\n            }\n        }\n\n        parameter: {\n            affinity?: [string]: [...string]\n            tolerations?: [string]: string\n        }\n')),Object(r.b)("p",null,"The patch trait above assumes the target component instance have ",Object(r.b)("inlineCode",{parentName:"p"},"spec.template.spec.affinity")," field.\nHence, we need to use ",Object(r.b)("inlineCode",{parentName:"p"},"appliesToWorkloads")," to enforce the trait only applies to those workload types have this field."),Object(r.b)("p",null,"Another important field is ",Object(r.b)("inlineCode",{parentName:"p"},"podDisruptive"),", this patch trait will patch to the pod template field,\nso changes on any field of this trait will cause the pod to restart, We should add ",Object(r.b)("inlineCode",{parentName:"p"},"podDisruptive")," and make it to be true\nto tell users that applying this trait will cause the pod to restart."),Object(r.b)("p",null,"Now the users could declare they want to add node affinity rules to the component instance as below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n      traits:\n        - type: "node-affinity"\n          properties:\n            affinity:\n              server-owner: ["owner1","owner2"]\n              resource-pool: ["pool1","pool2","pool3"]\n            tolerations:\n              resource-pool: "broken-pool1"\n              server-owner: "old-owner"\n')),Object(r.b)("h3",{id:"known-limitations"},"Known Limitations"),Object(r.b)("p",null,"By default, patch trait in KubeVela leverages the CUE ",Object(r.b)("inlineCode",{parentName:"p"},"merge")," operation. It has following known constraints though:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Can not handle conflicts.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For example, if a component instance already been set with value ",Object(r.b)("inlineCode",{parentName:"li"},"replicas=5"),", then any patch trait to patch ",Object(r.b)("inlineCode",{parentName:"li"},"replicas")," field will fail, a.k.a you should not expose ",Object(r.b)("inlineCode",{parentName:"li"},"replicas")," field in its component definition schematic."))),Object(r.b)("li",{parentName:"ul"},"Array list in the patch will be merged following the order of index. It can not handle the duplication of the array list members. This could be fixed by another feature below.")),Object(r.b)("h3",{id:"strategy-patch"},"Strategy Patch"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"strategy patch")," is useful for patching array list."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that this is not a standard CUE feature, KubeVela enhanced CUE in this case.")),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"//+patchKey=<key_name>")," annotation, merging logic of two array lists will not follow the CUE behavior. Instead, it will treat the list as object and use a strategy merge approach:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if a duplicated key is found, the patch data will be merge with the existing values; "),Object(r.b)("li",{parentName:"ul"},"if no duplication found, the patch will append into the array list.")),Object(r.b)("p",null,"The example of strategy patch trait will like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            // +patchKey=name\n            spec: template: spec: containers: [parameter]\n        }\n        parameter: {\n            name:  string\n            image: string\n            command?: [...string]\n        }\n')),Object(r.b)("p",null,"In above example we defined ",Object(r.b)("inlineCode",{parentName:"p"},"patchKey")," is ",Object(r.b)("inlineCode",{parentName:"p"},"name")," which is the parameter key of container name. In this case, if the workload don't have the container with same name, it will be a sidecar container append into the ",Object(r.b)("inlineCode",{parentName:"p"},"spec.template.spec.containers")," array list. If the workload already has a container with the same name of this ",Object(r.b)("inlineCode",{parentName:"p"},"sidecar")," trait, then merge operation will happen instead of append (which leads to duplicated containers)."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"patch")," and ",Object(r.b)("inlineCode",{parentName:"p"},"outputs")," both exist in one trait definition, the ",Object(r.b)("inlineCode",{parentName:"p"},"patch")," operation will be handled first and then render the ",Object(r.b)("inlineCode",{parentName:"p"},"outputs"),". "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "expose the app"\n  name: expose\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {spec: template: metadata: labels: app: context.name}\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            metadata: name: context.name\n            spec: {\n                selector: app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n        parameter: {\n            http: [string]: int\n        }\n')),Object(r.b)("p",null,"So the above trait which attaches a Service to given component instance will patch an corresponding label to the workload first and then render the Service resource based on template in ",Object(r.b)("inlineCode",{parentName:"p"},"outputs"),"."),Object(r.b)("h2",{id:"more-use-cases-of-patch-trait"},"More Use Cases of Patch Trait"),Object(r.b)("p",null,"Patch trait is in general pretty useful to separate operational concerns from the component definition, here are some more examples."),Object(r.b)("h3",{id:"add-labels"},"Add Labels"),Object(r.b)("p",null,"For example, patch common label (virtual group) to the component instance."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Add virtual group labels"\n  name: virtualgroup\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: {\n                metadata: labels: {\n                    if parameter.scope == "namespace" {\n                        "app.namespace.virtual.group": parameter.group\n                    }\n                    if parameter.scope == "cluster" {\n                        "app.cluster.virtual.group": parameter.group\n                    }\n                }\n            }\n        }\n        parameter: {\n            group: *"default" | string\n            scope:  *"namespace" | string\n        }\n')),Object(r.b)("p",null,"Then it could be used like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  ...\n      traits:\n      - type: virtualgroup\n        properties:\n          group: "my-group1"\n          scope: "cluster"\n')),Object(r.b)("h3",{id:"add-annotations"},"Add Annotations"),Object(r.b)("p",null,"Similar to common labels, you could also patch the component instance with annotations. The annotation value should be a JSON string."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Specify auto scale by annotation"\n  name: kautoscale\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        import "encoding/json"\n\n        patch: {\n            metadata: annotations: {\n                "my.custom.autoscale.annotation": json.Marshal({\n                    "minReplicas": parameter.min\n                    "maxReplicas": parameter.max\n                })\n            }\n        }\n        parameter: {\n            min: *1 | int\n            max: *3 | int\n        }\n')),Object(r.b)("h3",{id:"add-pod-environments"},"Add Pod Environments"),Object(r.b)("p",null,"Inject system environments into Pod is also very common use case."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This case relies on strategy merge patch, so don't forget add ",Object(r.b)("inlineCode",{parentName:"p"},"+patchKey=name")," as below:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add env into your pods"\n  name: env\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    env: [\n                        for k, v in parameter.env {\n                            name:  k\n                            value: v\n                        },\n                    ]\n                }]\n            }\n        }\n\n        parameter: {\n            env: [string]: string\n        }\n')),Object(r.b)("h3",{id:"inject-serviceaccount-based-on-external-auth-service"},"Inject ",Object(r.b)("inlineCode",{parentName:"h3"},"ServiceAccount")," Based on External Auth Service"),Object(r.b)("p",null,"In this example, the service account was dynamically requested from an authentication service and patched into the service."),Object(r.b)("p",null,"This example put UID token in HTTP header but you can also use request body if you prefer."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "dynamically specify service account"\n  name: service-account\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        processing: {\n            output: {\n                credentials?: string\n            }\n            http: {\n                method: *"GET" | string\n                url:    parameter.serviceURL\n                request: {\n                    header: {\n                        "authorization.token": parameter.uidtoken\n                    }\n                }\n            }\n        }\n        patch: {\n            spec: template: spec: serviceAccountName: processing.output.credentials\n        }\n\n        parameter: {\n            uidtoken:   string\n            serviceURL: string\n        }\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"processing.http")," section is an advanced feature that allow trait definition to send a HTTP request during rendering the resource. Please refer to ",Object(r.b)("a",{parentName:"p",href:"#Processing-Trait"},"Execute HTTP Request in Trait Definition")," section for more details."),Object(r.b)("h3",{id:"add-initcontainer"},"Add ",Object(r.b)("inlineCode",{parentName:"h3"},"InitContainer")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/#create-a-pod-that-has-an-init-container"},Object(r.b)("inlineCode",{parentName:"a"},"InitContainer"))," is useful to pre-define operations in an image and run it before app container."),Object(r.b)("p",null,"Below is an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add an init container and use shared volume with pod"\n  name: init-container\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    volumeMounts: [{\n                        name:      parameter.mountName\n                        mountPath: parameter.appMountPath\n                    }]\n                }]\n                initContainers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                    if parameter.command != _|_ {\n                        command: parameter.command\n                    }\n\n                    // +patchKey=name\n                    volumeMounts: [{\n                        name:      parameter.mountName\n                        mountPath: parameter.initMountPath\n                    }]\n                }]\n                // +patchKey=name\n                volumes: [{\n                    name: parameter.mountName\n                    emptyDir: {}\n                }]\n            }\n        }\n\n        parameter: {\n            name:  string\n            image: string\n            command?: [...string]\n            mountName:     *"workdir" | string\n            appMountPath:  string\n            initMountPath: string\n        }\n')),Object(r.b)("p",null,"The usage could be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n      traits:\n        - type: "init-container"\n          properties:\n            name:  "install-container"\n            image: "busybox"\n            command:\n            - wget\n            - "-O"\n            - "/work-dir/index.html"\n            - http://info.cern.ch\n            mountName: "workdir"\n            appMountPath:  "/usr/share/nginx/html"\n            initMountPath: "/work-dir"\n')))}l.isMDXComponent=!0}}]);