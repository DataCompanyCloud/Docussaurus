module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Assuntos Gerais',
      items: [
        'assuntos_gerais/http',
        'assuntos_gerais/postman',
        'assuntos_gerais/webSocket',
      ],
    },
    {
      type: 'category',
      label: 'Coletor',
      items: [
        {
          type: 'category',
          label: 'Aplicativo',
          link: {
            type: 'doc',
            id: 'coletor/aplicativo/aplicativo',
          },
          items: [
            'coletor/aplicativo/telas',
            'coletor/aplicativo/processos',
          ],
        },
        {
          type: 'category',
          label: 'Servidor',
          link: {
            type: 'doc',
            id: 'coletor/servidor/servidor',
          },
          items: [
            {
              type: 'category',
              label: 'Rotas',
              items: [
                {
                  type: 'category',
                  label: 'Autentication',
                  items: [
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/authentication/post_login',
                      label: 'Login',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Dispatch',
                  items: [
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/dispatch/get_complete-a-order',
                      label: 'complete-a-order',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/dispatch/get_send-order',
                      label: 'send-order',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/dispatch/get_start-a-order',
                      label: 'start-a-order',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/dispatch/post_booking',
                      label: 'booking',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/dispatch/post_dispatch-a-product',
                      label: 'dispatch-a-product',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/dispatch/post_reset-stock-at-location',
                      label: 'reset-stock-at-location',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Goods Receipt',
                  items: [
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/goods_receipt/get_get-purchase-invoice',
                      label: 'get-purchase-invoice',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/goods_receipt/post_informe-goods-receipt-unit-type',
                      label: 'informe-goods-receipt-unit-type',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/goods_receipt/post_store-products-in-quarantine',
                      label: 'store-products-in-quarantine',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Stock',
                  items: [
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/stock/get_get-all-locations-from-product',
                      label: 'get-all-locations-from-product',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/stock/get_get-all-products-from-locations',
                      label: 'get-all-products-from-locations',
                    },
                    {
                      type: 'doc',
                      id: 'coletor/servidor/rotas/stock/get_get-all-units',
                      label: 'get-all-units',
                    },
                  ],
                },
              ],
            },
            'coletor/servidor/configuração',
            'coletor/servidor/erros',
          ],
        },
      ],
    },
  ],
};
