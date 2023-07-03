def remove_html_comments(file_path):
    # Leer el archivo HTML
    with open(file_path, 'r') as file:
        html_content = file.read()

    # Eliminar los comentarios HTML
    import re
    pattern = r'<!--(.*?)-->'
    html_content = re.sub(pattern, '', html_content, flags=re.DOTALL)

    # Escribir el contenido modificado en un nuevo archivo
    output_file_path = file_path.split('.')[0] + '_without_comments.html'
    with open(output_file_path, 'w') as file:
        file.write(html_content)

    print(f"Se han eliminado los comentarios HTML. El archivo sin comentarios se ha guardado en: {output_file_path}")

# Ruta del archivo HTML
file_path = 'clean.html'

# Llamar a la función para eliminar los comentarios HTML
remove_html_comments(file_path)
