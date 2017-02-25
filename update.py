import lector
import config


api = lector.KindleCloudReaderAPI(config.username, config.password)
my_library = api.get_library_metadata()
book = my_library[0]
book_progress = api.get_book_progress(book.asin)
_, current_page, last_page = book_progress.page_nums
start_pos, current_pos, last_pos = book_progress.positions

print 'Currently reading %s (Page %d of %d)' % (book.title, current_page, last_page)
print 'Currently reading %s (Pos %d, %d of %d)' % (book.title, start_pos, current_pos, last_pos)
