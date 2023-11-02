function gerarPDF() {
    const doc = new window.jspdf.jsPDF();
    var cartItems = document.getElementsByClassName('cart-row');
    var totalPrice = 0;
  
    // Adicionar o título "Lista de Compras"
    doc.setFontSize(18);
    doc.text('Lista de Compras', 10, 10);
  
    // Definir a posição inicial da tabela
    var tableX = 10;
    var tableY = 20;
    var tableColumnWidths = [60, 40, 40, 40];
    var tableRowHeight = 10;
    var tableHeader = ['ITEM', 'QUANTIDADE', '          PREÇO', '         TOTAL'];
  
    // Adicionar cabeçalho da tabela
    doc.setFont('helvetica', 'bold');
    for (var j = 0; j < tableHeader.length; j++) {
      doc.text(tableHeader[j], tableX + (j * tableColumnWidths[j]), tableY);
    }
  
    // Loop pelos itens do carrinho
    for (var i = 0; i < cartItems.length; i++) {
      var cartItem = cartItems[i];
      var titleElement = cartItem.getElementsByClassName('cart-item-title')[0];
      var priceElement = cartItem.getElementsByClassName('cart-price')[0];
      var quantityElement = cartItem.getElementsByClassName('cart-quantity-input')[0];
  
      // Verificar se os elementos existem antes de acessar as propriedades
      if (titleElement && priceElement && quantityElement) {
        var title = titleElement.innerText;
        var price = priceElement.innerText;
        var quantity = parseInt(quantityElement.value);
  
        // Calcular o subtotal do item
        var itemPrice = parseFloat(price.replace('€', ''));
        var subtotal = itemPrice * quantity;
        var unitPrice = itemPrice.toFixed(2) + '€';
        var totalItemPrice = subtotal.toFixed(2) + '€';
  
        // Adicionar os detalhes do item à tabela
        var tableRowY = tableY + ((i + 1) * tableRowHeight);
        doc.setFont('helvetica', 'normal');
        doc.text(title, tableX, tableRowY);
        doc.text(quantity.toString(), tableX + tableColumnWidths[0], tableRowY);
        doc.text(unitPrice, tableX + tableColumnWidths[0] + tableColumnWidths[1], tableRowY);
        doc.text(totalItemPrice, tableX + tableColumnWidths[0] + tableColumnWidths[1] + tableColumnWidths[2], tableRowY);
  
        totalPrice += subtotal;
      }
    }
  
    // Adicionar o valor total à tabela
    var totalRowY = tableY + ((cartItems.length + 1) * tableRowHeight);
    doc.setFont('helvetica', 'bold');
    doc.text('Total', tableX + tableColumnWidths[0] + tableColumnWidths[1], totalRowY);
    doc.text(totalPrice.toFixed(2) + '€', tableX + tableColumnWidths[0] + tableColumnWidths[1] + tableColumnWidths[2], totalRowY);
  
    // Gerar o blob do PDF
    const pdfBlob = doc.output('blob');
  
    // Criar a URL do objeto Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);
  
    // Criar um link simulado  
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'carrinho.pdf';
  
    // Acionar um clique no link
    link.click();
  
    // Liberar a URL do objeto Blob
    URL.revokeObjectURL(pdfUrl);
  }
  