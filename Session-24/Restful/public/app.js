function sendDeleteRequest() {
    const confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "/comments/:commentid"; // Replace this with the actual URL of the delete request
      form.innerHTML = '<input type="hidden" name="_method" value="DELETE">';
      document.body.appendChild(form);
      form.submit();
    }
  }